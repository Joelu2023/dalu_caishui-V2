/**
 * 调用 COS API 开启静态网站（索引 / 错误文档均为 index.html，适配 SPA）
 */
import COS from 'cos-nodejs-sdk-v5'
import dotenv from 'dotenv'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '..', '.env') })

const required = ['COS_SECRET_ID', 'COS_SECRET_KEY', 'COS_BUCKET', 'COS_REGION']
for (const k of required) {
  if (!process.env[k]?.trim()) {
    console.error(`[enable-cos-website] 缺少 .env 配置: ${k}`)
    process.exit(1)
  }
}

const cos = new COS({
  SecretId: process.env.COS_SECRET_ID,
  SecretKey: process.env.COS_SECRET_KEY,
})

const Bucket = process.env.COS_BUCKET
const Region = process.env.COS_REGION

await new Promise((resolve, reject) => {
  cos.putBucketWebsite(
    {
      Bucket,
      Region,
      WebsiteConfiguration: {
        IndexDocument: { Suffix: 'index.html' },
        ErrorDocument: { Key: 'index.html' },
      },
    },
    (err, data) => (err ? reject(err) : resolve(data)),
  )
})

const host = `${Bucket}.cos-website.${Region}.myqcloud.com`
console.log('[enable-cos-website] 静态网站已开启（索引与错误页均为 index.html）。\n')
console.log('请在浏览器打开：')
console.log(`https://${host}/`)
console.log('\n若仍无法访问，请在控制台确认桶为「公有读私有写」，并稍等 1～2 分钟再试。')
