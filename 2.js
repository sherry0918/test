//222
module.exports = {
  productionSourceMap: false,  // 生产环境不生成js对应的map文件
  devServer: {
    open: true, 
    host: "192.168.51.250",
    port: '8081',
    https: false,
    hotOnly: false,
    proxy: {
      "/": {
        // target: 'http://192.168.51.179',
        target: 'http://test.y1y.me',
        // target: 'http://wk.manaday.cn',
        // target: 'http://t.zumaly.cn',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": ""
        // }
      },
    }
  }
}