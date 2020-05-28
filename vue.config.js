const path = require('path');
const resolve = dir => path.join(__dirname, dir);
// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
  devServer: {
    //反向代理
    proxy: {
      // url中遇到API 把请求改成https://xiaojieapi.cn
      '/API': {
        target: 'https://xiaojieapi.cn',
        //是否需要安全验证 http需要 https不需要
        secure: false,
        //是否允许跨域
        changeOrigin: true
      },
      '/fcg-bin': {
        target: 'https://c.y.qq.com/v8',
        secure: false,
        changeOrigin: true
      },
      '/api': {
        target: 'http://39.97.33.178',
        secure: true,
        changeOrigin: true
      },
      '/xiaomi': {
        target: 'http://localhost:80',
        secure: true,
        changeOrigin: true
      },
      '/geocoder': {
        target: 'http://api.map.baidu.com',
        secure: true,
        changeOrigin: true
      }
    }
  },
  //配置别名
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src'));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  }
};
//https://xiaojieapi.cn/API/60s.php?
