/**
 * 构建并推送到 gh-pages 分支（配合 GitHub Pages「从分支部署」）
 * 无需在设置里选 GitHub Actions 作为 Source。
 */
import { execSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
process.chdir(root)

const base = '/dalu_caishui-V2/'
const env = { ...process.env, VITE_BASE: base }

console.log(`[deploy-gh-pages] VITE_BASE=${base}\n`)

execSync('npm run build', { stdio: 'inherit', env })
execSync('node scripts/postbuild-spa.mjs', { stdio: 'inherit', env })
execSync('npx gh-pages -d dist -m "deploy: GitHub Pages"', { stdio: 'inherit', env })

console.log('\n[deploy-gh-pages] 已推送到 gh-pages 分支。')
console.log('请到仓库 Settings → Pages → Source 选「Deploy from a branch」→ Branch: gh-pages / root')
