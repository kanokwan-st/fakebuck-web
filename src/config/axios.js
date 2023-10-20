import axios from "axios";
import { getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

// ทุก req จะดักจับและใส่ค่า access token ให้โดยอัตโนมัติ
axios.interceptors.request.use(
  (config) => {
    // ถ้ามี token ให้ใส่ใน key authorization
    if (getAccessToken()) {
        config.headers.authorization = `Bearer ${getAccessToken()}`;
    } 
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
