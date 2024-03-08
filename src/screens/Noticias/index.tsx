import React, { useEffect } from "react";
import * as S from "./styles";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useNoticias } from "../../hooks/useNoticias";
import ActivityIndicatorContainer from "../../components/ActivityIndicatorContainer";
import NewsItemLarge from "../../components/NewsItemLarge";
import { INews } from "../../hooks/types";

interface IRenderNews {
  index: number;
  item: INews;
}

const NoticiasScreen = () => {
  const { news, isLoading, getLatestNews } = useNoticias();

  useEffect(() => {
    getLatestNews();
  }, []);

  const renderNews = ({ index, item }: IRenderNews) => (
    <NewsItemLarge key={index} newsItem={item} />
  );

  if (isLoading) {
    return (
      <S.Container>
        <ActivityIndicatorContainer>
          <ActivityIndicator testID="loading-indicator" size="large" color="#000" />
        </ActivityIndicatorContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <FlatList
        data={news}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={renderNews}
      />
    </S.Container>
  );
};

export default NoticiasScreen;
