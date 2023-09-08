# vue-web-starter

## TODO

- [x] 数据持久化
- [x] 工具库发包
- [x] API 自动生成
- [ ] Ali-OSS
- [ ] 上传组件

### 📂 基于文件的路由和布局

将 `pages` （默认）目录下的文件自动生成路由，查看 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 了解更多信息

预设布局

1. default (默认)
2. mobile (移动端)
3. screen (数据可视化)
4. blank (空白)

### API 自动生成

基于 `@umijs/openapi` 自动生成 API（基于 OpenAPI 3.0 规范）

```bash
openapi --schemaPath [schemaPath]
```

### 配置文件 `.env`

```bash
# 公共路径
VITE_PUBLIC_PATH = /
# 接口代理地址
VITE_PROXY = [["/api", "https://yourapi.com"]]
# 是否启用打包分析
VITE_ENABLE_ANALYZE

```

### 📦 组件和 API 自动导入 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)，[unplugin-auto-imports](https://github.com/antfu/unplugin-auto-import)

### 🍍 使用 Pinia 的状态管理

### 🎨 原子化 CSS

使用 UnoCSS

```html
<div class="bg-img-1"></div>
```

### 😃 各种图标集

图标集可在 [https://icones.js.org](https://icones.js.org) 中查找。

使用前要安装对应图标库依赖，`@iconify/json` (全量图标库, 50MB) 或者选择安装单个图标库 `@iconify-json/{collection_name}`

### ♿ 插件

- [Vue Router](https://github.com/vuejs/router)
- [Pinia](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强 Vue 开发者体验的 Vite 插件

### ⚒ 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
