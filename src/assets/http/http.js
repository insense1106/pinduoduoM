import axios from 'axios';
const music = axios.create({
  baseURL: '/fcg-bin',
  timeout: 16000
  //   withCredentials: true
});
const movie = axios.create({
  baseURL: '/api',
  timeout: 16000
});
const xiaomi = axios.create({
  baseURL: '/xiaomi',
  timeout: 16000
  // withCredentials: true
});
const geocoder = axios.create({
  baseURL: '/geocoder',
  timeout: 16000
  // withCredentials: true
});
export default {
  // 获取数据列表  截取有用数据
  // 用到该请求的组件 f4page
  async music_focus_list() {
    let res = await music('/fcg_first_yqq.fcg', {
      params: {
        format: 'jsonp',
        tpl: 'v12',
        page: 'other',
        rnd: 0,
        g_tk: new Date().getTime(),
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'GB2312',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    });
    let res2 = res.data.substring(18);
    let res3 = res2.split('');
    res3.pop();
    let res5 = res3.join('');
    let res6 = JSON.parse(res5);
    return res6.data.focus;
  },
  // 用到该请求的组件f2listgoods
  //https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg
  async music_hotdiss_list() {
    let res = await music('/fcg_first_yqq.fcg', {
      params: {
        format: 'jsonp',
        tpl: 'v12',
        page: 'other',
        rnd: 0,
        g_tk: new Date().getTime(),
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'GB2312',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    });
    let res2 = res.data.substring(18);
    let res3 = res2.split('');
    res3.pop();
    let res5 = res3.join('');
    let res6 = JSON.parse(res5);
    // console.log(res.data);

    // let res = str.match(/MusicJsonCallback\((\S*)\)/);
    // console.log(res.data.match(/MusicJsonCallback\((\S*)\)/));
    //MusicJsonCallback(

    // let data2 = data.match(/(\S*)}\)/);
    // console.log(data2);

    return res6.data.hotdiss.list;
  },
  // 向服务器发送 接口为hotlist的请求
  hotList() {
    return movie('/hotList');
  },
  // 带参请求
  info(id) {
    return movie('/info', {
      params: {
        id
      }
    });
  },
  async movie_cityList() {
    let res = await movie('/cityList');
    return res;
  },
  async movie_nowplaying_movie(id = 1) {
    let res = await movie('/movieOnInfoList?cityId=' + id);
    return res;
  },
  async xiaomi_random_data() {
    let res = await xiaomi('/random_data');
    return res;
  },
  async geocoder_city_name(city) {
    let res = await geocoder({
      method: 'get',
      params: {
        address: city,
        output: 'json',
        key: 'key=a4MZkha6OgaX59M8yRsKTb0Ssvz1YynB',
        city: city
      }
    });
    return res;
  },
  async xiaomi_question() {
    let res = await xiaomi({
      method: 'get',
      url: '/question'
    });
    return res;
  },
  async xiaomi_code() {
    let res = await xiaomi({
      method: 'get',
      url: '/code'
    });
    if (res) {
      return res.data.local_code;
    }
  },
  async xiaomi_login(data) {
    let res = await xiaomi({
      method: 'post',
      url: '/login',
      // headers: { 'Content-Type': 'multipart/form-data' },
      data: data
    });
    if (res) {
      return res;
    }
  },
  xiaomi_goods(data) {
    return new Promise((result, rej) => {
      let res = xiaomi({
        method: 'post',
        url: '/goods',
        // headers: { 'Content-Type': 'multipart/form-data' },
        data: data
      });
      if (res) {
        result(res);
      } else {
        rej(res);
      }
    });
  }
};
/**
http://39.97.33.178/api/movieOnInfoList?cityId=10
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
