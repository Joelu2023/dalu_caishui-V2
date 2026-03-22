/**
 * 将 dist/ 上传到腾讯云 COS（适合广州地域静态网站托管）
 * 使用前复制 .env.example 为 .env 并填写密钥与桶信息。
 */
import COS from 'cos-nodejs-sdk-v5'
import dotenv from 'dotenv'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import mime from 'mime'

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '..', '.env') })

const required = ['COS_SECRET_ID', 'COS_SECRET_KEY', 'COS_BUCKET', 'COS_REGION']
for (const k of required) {
  if (!process.env[k]?.trim()) {
    console.error(`[deploy-cos] 请在项目根目录 .env 中配置: ${k}`)
    console.error('可参考 .env.example，并在腾讯云「访问管理」创建 API 密钥。')
    process.exit(1)
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

if (!existsSync(join(distDir, 'index.html'))) {
  console.error('[deploy-cos] 未找到 dist/index.html，请先执行: npm run build:china')
  process.exit(1)
}

function* walkFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) yield* walkFiles(p)
    else yield p
  }
}

let prefix = process.env.COS_PREFIX ?? ''
if (prefix && !prefix.endsWith('/')) prefix += '/'

function toKey(absPath) {
  const rel = relative(distDir, absPath).split(/[/\\]/).join('/')
  return prefix + rel
}

/** 避免浏览器把页面当「下载」：明确 text/html 与 inline */
function getObjectMeta(filePath) {
  const lower = filePath.toLowerCase()
  let ContentType = mime.getType(filePath) ?? 'application/octet-stream'
  if (lower.endsWith('.html')) ContentType = 'text/html; charset=utf-8'
  else if (lower.endsWith('.css')) ContentType = 'text/css; charset=utf-8'
  else if (lower.endsWith('.js')) ContentType = 'application/javascript; charset=utf-8'
  else if (lower.endsWith('.svg')) ContentType = 'image/svg+xml; charset=utf-8'

  const meta = { ContentType }
  // 网页与静态资源用 inline，减少「提示下载」行为（尤其部分安卓浏览器）
  if (/\.(html|css|js|svg|ico|woff2?)$/i.test(lower)) {
    meta.ContentDisposition = 'inline'
  }
  return meta
}

async function main() {
  const cos = new COS({
    SecretId: process.env.COS_SECRET_ID,
    SecretKey: process.env.COS_SECRET_KEY,
  })

  const Bucket = process.env.COS_BUCKET
  const Region = process.env.COS_REGION

  const files = [...walkFiles(distDir)]
  console.log(`[deploy-cos] 准备上传 ${files.length} 个文件 → ${Region} / ${Bucket}\n`)

  let n = 0
  for (const filePath of files) {
    const Key = toKey(filePath)
    const { ContentType, ContentDisposition } = getObjectMeta(filePath)
    await new Promise((resolve, reject) => {
      cos.putObject(
        {
          Bucket,
          Region,
          Key,
          Body: readFileSync(filePath),
          ContentType,
          ...(ContentDisposition ? { ContentDisposition } : {}),
        },
        (err, data) => (err ? reject(err) : resolve(data)),
      )
    })
    n++
    console.log(`[${n}/${files.length}] ${Key}`)
  }

  const websiteHost = `${Bucket}.cos-website.${Region}.myqcloud.com`
  console.log('\n[deploy-cos] 上传完成。\n')
  console.log('【还需您自己在 COS 控制台操作一次】')
  console.log('1. 存储桶 → 权限管理 → 存储桶访问权限：公有读私有写（或按业务设策略）。')
  console.log('2. 存储桶 → 基础配置 → 静态网站：开启；索引文档 index.html；错误文档填 index.html（单页应用）。')
  console.log('3. 用浏览器打开（勿仅用微信内打开）：')
  console.log(`   https://${websiteHost}/`)
  if (process.env.COS_PUBLIC_URL) {
    console.log(`   或自定义域名: ${process.env.COS_PUBLIC_URL}`)
  }
}

main().catch((e) => {
  console.error('[deploy-cos] 失败:', e.message || e)
  process.exit(1)
})
