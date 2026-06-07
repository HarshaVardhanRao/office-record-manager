import axios from "axios";

const api = axios.create({
  baseURL: "http://100.53.76.52:8000"
});

export default api;