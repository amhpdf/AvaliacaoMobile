import axios from "axios";

const URL_API = "https://api-site.amhp.com.br/api/";

const api = axios.create({
  baseURL: URL_API,
});

export default api;
