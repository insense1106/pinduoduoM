import axios from 'axios';
const instance = axios.create({
  baseURL: '/xiaomi',
  timeout: 16000
  // withCredentials: true
});
export default instance;
