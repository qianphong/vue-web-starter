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
      bg_color: 'var(--el-bg-color)',
    },
    spacing: {
      large: '20px',
      base: '16px',
      small: '12px',
      tiny: '8px',
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
