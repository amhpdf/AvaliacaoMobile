import React from "react";
import * as S from "./styles";
import { INews } from "../../hooks/types";
import { formatDate } from "../../utils";

interface NewsItemLargeProps {
  newsItem: INews;
}

const NewsItemLarge = ({ newsItem }: NewsItemLargeProps) => {
  return (
    <S.Container>
      <S.Image source={{ uri: `data:image/jpeg;base64,${newsItem.imagem}` }} />
      <S.Date>{formatDate(newsItem.dataCriacao)}</S.Date>
      <S.Summary>
        {newsItem.resumo.length > 150
          ? `${newsItem.resumo.slice(0, 149)}...`
          : newsItem.resumo}
      </S.Summary>
      <S.Button>
        <S.ButtonTitle>LER NOTÍCIA</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
};

export default NewsItemLarge;
