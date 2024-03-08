import { useState } from "react";
import api from "../services/api";
import { INews } from "./types";

export const Noticias = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUltimasNoticias = async () => {
    try {
      const response = await api.get<INews[]>("noticias/recentes/8");
      setNews(response.data);
    } catch (error) {
      console.error("Erro ao buscar as últimas notícias", error);
    }

    setIsLoading(false);
  };

  return {
    news,
    isLoading,
    getUltimasNoticias,
  };
};