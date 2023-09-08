## modules 文件夹

导出一个名为 `install` 的函数，会在应用运行时自动安装

```ts
export const install: UserModule = ({ app }) => {
  app.use(myModule)
}
```
