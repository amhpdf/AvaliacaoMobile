import { useState } from "react";
import api from "../services/api";
import { IBanner, INews } from "./types";

export const useHome = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [latestFourNews, setLatestFourNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingLatestFourNews, setIsLoadingLatestFourNews] = useState(true);

  const getBanners = async () => {
    try {
      const response = await api.get<IBanner[]>("banners/publicados");
      setBanners(response.data);
    } catch (error) {
      console.error("Erro ao buscar banners", error);
    }

    setIsLoading(false);
  };

  const getLatestFourNews = async () => {
    try {
      const response = await api.get<INews[]>("noticias/recentes-home/4");
      setLatestFourNews(response.data);
    } catch (error) {
      console.error("Erro ao buscar as últimas 4 notícias", error);
    }

    setIsLoadingLatestFourNews(false);
  };

  const fetchData = async () => {
    try {
      await getBanners();
      await getLatestFourNews();
    } catch (error) {
      console.error("Erro ao obter dados:", error);
    }
  };

  return {
    banners,
    latestFourNews,
    isLoading,
    isLoadingLatestFourNews,
    fetchData,
  };
};
