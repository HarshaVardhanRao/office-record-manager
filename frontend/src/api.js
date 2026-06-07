import axios from "axios";

const api = axios.create({
  baseURL:"http://a82a24edfbc924a7c9d15643fae68e5f-19924227.us-east-1.elb.amazonaws.com:8000"
});

export default api;