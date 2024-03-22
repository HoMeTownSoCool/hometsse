// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  unocss: true,
  formatters: {
    css: true,
    html: true,
  },
})
