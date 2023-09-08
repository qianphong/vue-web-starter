import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      text_color_primary: 'var(--el-text-color-primary)',
      text_color_regular: 'var(--el-text-color-regular)',
      bg_color: 'var(--el-bg-color)',
    },
  },
  rules: [
    [
      /bg-img-([\w-]+)/,
      ([_, name]) => {
        return {
          'background-image': `url(../images/bg-${name}.png)`,
          'background-repeat': 'no-repeat',
        }
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: 'inline-block' },
    }),
  ],
  transformers: [transformerVariantGroup()],
  shortcuts: [
    ['wrapper', 'mx-5 xl:w-1200px 2xl:w-1400px xl:mx-a'],
    ['flex-c', 'flex justify-center items-center'],
    ['flex-ac', 'flex justify-around items-center'],
    ['flex-bc', 'flex justify-between items-center'],
  ],
})
