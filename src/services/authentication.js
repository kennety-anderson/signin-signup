import axios from "axios";

const apiAuthentication = axios.create({
  baseURL: process.env.REACT_APP_URL_AUTHENTICATION
});

export default apiAuthentication;
