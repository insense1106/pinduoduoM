import axios from 'axios';
const instance = axios.create({
  baseURL: '/fcg-bin',
  timeout: 16000
  //   withCredentials: true
});
export default instance;
