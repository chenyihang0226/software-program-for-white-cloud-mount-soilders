const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  // 预处理器配置
  preprocess: sveltePreprocess({
    // 启用 PostCSS 处理
    postcss: true,
    
    // 默认样式处理器设置
    defaults: {
      style: 'postcss',
    },
    
    // 确保正确处理 @apply 指令
    transformers: {
      postcss: {
        // 这将确保使用项目根目录的 postcss.config.js
        configFilePath: './postcss.config.js'
      }
    }
  }),
  
  // Svelte 编译器选项
  compilerOptions: {
    // 在生产环境禁用开发模式
    dev: process.env.NODE_ENV !== 'production'
  }
};