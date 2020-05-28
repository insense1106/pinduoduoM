import axios from 'axios';
const instance = axios.create({
  baseURL: '/API',
  timeout: 16000
  //   withCredentials: true
});
export default instance;
//https://xiaojieapi.cn/API/60s.php?
