import axios from 'axios';

const Api = axios.create({
  baseURL: "https://api-site.amhp.com.br/api/"
});

const getBanners = async () => {
  return Api.get("/banners/publicados");
}

export { getBanners };