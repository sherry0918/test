module.exports = {
  productionSourceMap: false,  // 生产环境不生成js对应的map文件
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "192.168.51.250000",
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