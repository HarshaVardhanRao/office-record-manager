import axios from "axios";

const api = axios.create({
  baseURL: "http://office-backend-env.eba-rrcfekmh.us-east-1.elasticbeanstalk.com/"
});

export default api;