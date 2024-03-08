import axios from 'axios';
import { INewsRecent } from './types';

const Api = axios.create({
  baseURL: "https://api-site.amhp.com.br/api/"
});

const getBanners = async () => {
  return Api.get("/banners/publicados");
}

const getNewsRecent = async (quantity: number) => {
  return Api.get(`/noticias/recentes/${quantity}`);
}

export { getBanners, getNewsRecent };