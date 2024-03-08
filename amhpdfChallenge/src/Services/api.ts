import axios from 'axios';

export async function getBanners() {
    try {
        const { data } = await axios.get('https://api-site.amhp.com.br/api/banners/publicados')

        return data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};

export async function getLastNews() {
    try {
        const { data } = await axios.get('https://api-site.amhp.com.br/api/noticias/recentes-home/4');

        return data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};

export async function getNews() {
    try {
        const { data } = await axios.get('https://api-site.amhp.com.br/api/noticias/recentes/8');

        return data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};

export async function getInsurances() {
    try {
        const { data } = await axios.get('https://api-site.amhp.com.br/api/convenios/ativos');

        return data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};