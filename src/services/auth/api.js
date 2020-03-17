import axios from 'axios';
// import { getToken } from './authentication';

const apiAuthentication = axios.create({
  baseURL: process.env.REACT_APP_URL_AUTHENTICATION,
});

// apiAuthentication.interceptors.request.use(async config => {
//   const token = getToken();
//   return token ? (config.headers.Authorization = token) : config;
// });

export default apiAuthentication;
