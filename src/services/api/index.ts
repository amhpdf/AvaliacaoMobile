import axios from "axios";

const bannerApiUrl = "https://api-site.amhp.com.br/api/banners/publicados";
const newsApiUrl4 = "https://api-site.amhp.com.br/api/noticias/recentes-home/4";
const newsApiUrl8 = "https://api-site.amhp.com.br/api/noticias/recentes/8";
const insuranceApiUrl = "https://api-site.amhp.com.br/api/convenios/ativos";

async function getBanners() {
  const response = await axios.get(bannerApiUrl);
  return response.data;
}

async function getNews4() {
  const response = await axios.get(newsApiUrl4);
  return response.data;
}

async function getNews8() {
  const response = await axios.get(newsApiUrl8);
  return response.data;
}

async function getInsurance() {
  const response = await axios.get(insuranceApiUrl);
  return response.data;
}

export const api = { getBanners, getNews4, getNews8, getInsurance };
