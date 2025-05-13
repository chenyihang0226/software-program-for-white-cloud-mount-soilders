module.exports = {
  plugins: {
    'postcss-import': {}, // 处理 @import 规则
    '@tailwindcss/postcss': {}, // Tailwind CSS 4.x 的新插件名称
    'autoprefixer': {}, // 添加浏览器前缀
    'postcss-clean': {} // 压缩和清理 CSS
  }
}