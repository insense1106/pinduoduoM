import axios from 'axios';
const instance = axios.create({
  baseURL: '/api',
  timeout: 6000
  // withCredentials: true
});
export default {
  // 向服务器发送 接口为hotlist的请求
  hotList() {
    return instance('/hotList');
  },
  // 请求数据2
  info(id) {
    return instance('/info', {
      params: {
        id
      }
    });
  },
  cityList() {
    return instance('/cityList');
  },
  nowplaying_movie(id = 1) {
    return instance('/movieOnInfoList?cityId=' + id);
  }
};
/**
 * 
 *  {
  // 向服务器发送 接口为hotlist的请求
  hotList() {
    return instance('/hotList');
  },
  // 请求数据2
  info(id) {
    return instance('/info', {
      params: {
        id
      }
    });
  },
  cityList() {
    return instance('/cityList');
  },
  nowplaying_movie(id = 1) {
    return instance('/movieOnInfoList?cityId=' + id);
  }
};
 //http://39.97.33.178/api/movieOnInfoList?cityId=10

http://www.h5yjy.com
http://39.97.33.178

正在热映

http://39.97.33.178/api/movieOnInfoList?cityId=10

即将上映

http://39.97.33.178/api/movieComingList?cityId=10

搜索

http://39.97.33.178/api/searchList?cityId=10&kw=a

城市

http://39.97.33.178/api/cityList
 * 
 */
