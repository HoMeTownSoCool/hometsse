import {
  defineConfig, // 用于定义 UNO CSS 的配置，包括预设等
  presetAttributify, // 用于支持 attributify 模式 (class="bg-blue-500" -> bg="blue-500")
  presetIcons, // 用于支持内置的图标集
  presetTypography, // 用于支持内置的排版预设
  presetUno, // 用于支持 UNOCSS 的核心特性
  presetWebFonts, // 用于支持内置的 Web Fonts
  transformerDirectives, // 用于支持内置的指令 @apply text-center my-0 font-medium;
  transformerVariantGroup, // 用于支持内置的变体组 <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:10',
    'bg-faded': 'bg-gray:5',
    'bg-base': 'bg-white dark:bg-[#020420]',
    'text-faded': 'text-gray6:100 dark:text-gray:100',
  },
  theme: { // 定义主题
    colors: {
      primary: {
        DEFAULT: '#00DC82',
      },
    },
  },
  presets: [ // 定义预设
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  content: {
    filesystem: [
      './content/**/*.md',
    ],
  },
  transformers: [ // 定义转换器
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
