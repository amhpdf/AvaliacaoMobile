import React, { useEffect } from "react";
import * as S from "./styles";
import { ActivityIndicator, Dimensions, FlatList, Text } from "react-native";
import { useHome } from "../../hooks/useHome";
import Carousel from "react-native-reanimated-carousel";
import CarouselItem from "../../components/CarouselItem";
import { INews } from "../../hooks/types";
import NewsItemSmall from "../../components/NewsItemSmall";
import ActivityIndicatorContainer from "../../components/ActivityIndicatorContainer";

interface IRenderNews {
  index: number;
  item: INews;
}

const HomeScreen = () => {
  const width = Dimensions.get("window").width;
  const {
    banners,
    latestFourNews,
    isLoading,
    isLoadingLatestFourNews,
    fetchData,
  } = useHome();

  useEffect(() => {
    fetchData();
  }, []);

  const renderNews = ({ index, item }: IRenderNews) => (
    <NewsItemSmall key={index} newsItem={item} />
  );

  if (isLoading) {
    return (
      <S.Container>
        <ActivityIndicatorContainer>
          <ActivityIndicator
            testID="loading-indicator"
            size="large"
            color="#000"
          />
        </ActivityIndicatorContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Carousel
        testID="carousel"
        loop
        width={width}
        height={350}
        autoPlay={true}
        data={banners}
        scrollAnimationDuration={1500}
        renderItem={({ item }) => (
          <CarouselItem imageUrl={item.urlImagemMobile} />
        )}
      />
      <S.ContentNews>
        <S.ContentNewsTitle testID="content-news-title">Últimas{"\n"}Notícias</S.ContentNewsTitle>
        <FlatList
          data={latestFourNews}
          keyExtractor={(item) => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderNews}
          ListFooterComponent={() =>
            isLoadingLatestFourNews ? (
              <ActivityIndicatorContainer>
                <ActivityIndicator size={"large"} color="#fff" />
              </ActivityIndicatorContainer>
            ) : null
          }
        />
      </S.ContentNews>
    </S.Container>
  );
};

export default HomeScreen;
