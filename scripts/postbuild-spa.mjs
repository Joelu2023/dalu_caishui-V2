/**
 * 将 index.html 复制为 404.html，供 Gitee Pages / 部分对象存储静态托管
 * 在「子路径找不到文件」时仍返回 SPA 入口（刷新子路由可用）。
 */
import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const indexHtml = join(dist, 'index.html')
const notFound = join(dist, '404.html')

if (!existsSync(indexHtml)) {
  console.error('[postbuild-spa] 请先执行 vite build，未找到 dist/index.html')
  process.exit(1)
}

copyFileSync(indexHtml, notFound)
console.log('[postbuild-spa] 已生成 dist/404.html（与 index.html 相同，用于静态托管 SPA）')
