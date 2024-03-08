import { useState } from "react";
import { IConvenio } from "./types";
import api from "../services/api";

export const Convenios = () => {
  const [convenios, setConvenios] = useState<IConvenio[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getConvenios = async () => {
    try {
      const response = await api.get<IConvenio[]>("convenios/ativos");
      setConvenios(response.data);
    } catch (error) {
      console.error("Erro ao buscar convênios", error);
    }

    setIsLoading(false);
  };

  const groupByFirstLetter = (conveniosList: IConvenio[]) => {
    return conveniosList.reduce((groups, convenio) => {
      const firstLetter = convenio.nomeConvenio.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(convenio);
      return groups;
    }, {} as Record<string, IConvenio[]>);
  };

  const groupedConvenios = groupByFirstLetter(convenios);

  return {
    groupedConvenios,
    isLoading,
    getConvenios,
  };
};
