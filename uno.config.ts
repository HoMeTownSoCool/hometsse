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
  shortcuts: [ // 定义快捷方式
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
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
  transformers: [ // 定义转换器
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
