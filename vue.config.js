// 最上方加入一個 webpack
const webpack = require('webpack');

// vue.config.js
module.exports = {
  // 如果環境是生產模式，就使用 gitHub pages 路徑，不然就用根目錄
  publicPath: process.env.NODE_ENV === 'production' ? '/Note-App/' : '/',

  // 本地預覽 file:// 改為相對路徑 './'
  // publicPath: './'

  // 創建 "$"、"jQuery"、"window.jQuery" 三個變數指向 jQuery 依賴
  // 創建 "Popper" 變數指向 popper.js 依賴
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
};
