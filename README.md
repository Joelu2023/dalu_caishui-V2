# 大陆财税工作室 · 官网

React + TypeScript + Vite + Tailwind。本地：`npm install` → `npm run dev`。

## GitHub Pages（在线预览）

仓库：[Joelu2023/dalu_caishui-V2](https://github.com/Joelu2023/dalu_caishui-V2)

站点地址：**https://joelu2023.github.io/dalu_caishui-V2/**

### 若 Settings 里「GitHub Actions」是灰色、选不了

常见原因：**私有仓库**在免费账号下，Pages 的 **Source** 里 **GitHub Actions** 可能不可用；或组织/企业策略限制。可任选其一：

**方式 A — 从分支发布（推荐，不依赖 Actions 选项）**

1. 在本机项目目录执行（需已配置 `git` 且能 push 到 GitHub）：  
   `npm run deploy:gh-pages`  
2. 打开 **Settings → Pages → Build and deployment**。  
3. **Source** 选 **Deploy from a branch**。  
4. **Branch** 选 **`gh-pages`**，文件夹选 **`/ (root)`**，保存。  
5. 等 1～2 分钟再访问上面站点地址。

**方式 B — 用 GitHub Actions 构建（若将来可选中 Actions）**

1. **Settings → Pages → Source** 选 **GitHub Actions**（能选时再开）。  
2. 推送 `main` 后会跑工作流 **Deploy to GitHub Pages**。  
3. 若仍灰色：把仓库改为 **Public**，或到 **Settings → Actions → General** 确认允许 Actions。

工作流报错可到 **Actions** 标签页查看日志。

---

# React + TypeScript + Vite（模板说明）

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
