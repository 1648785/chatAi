const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
      port: 8082,
      proxy: { //设置代理，必须填
          '/api': { //设置拦截器 拦截器格式 斜杠+拦截器名字，名字可以自己定
              target: 'http://localhost:9090', // 代 理 的 目标地址, 就是/api 代替http://localhost:10001
              changeOrigin: true, //是否设置同源，输入是的
              pathRewrite: {
                  '/api': ''
              }
          }
      }
  }
}