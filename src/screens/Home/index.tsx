import React from "react";
import { Linking, ListRenderItem } from "react-native";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  BannerContainer,
  BannerContainerIndicator,
  BannerImages,
  BannerIndicator,
  BannerTouchable,
  Banners,
  Container,
  Content,
  LatestNews,
  Loading,
  News,
  NewsButton,
  NewsButtonTitle,
  NewsContainer,
  NewsContainerImages,
  NewsImages,
  NewsTime,
  NewsTitle,
  Separator,
} from "./styles";
import types from "./index.d";

export const Home: React.FC = () => {
  axios.defaults.timeout = 60000;
  const [bannerData, setBannerData] = React.useState<Array<[]>>([]);
  const [newsData, setNewsData] = React.useState<Array<[]>>([]);
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const bannerApiUrl = "https://api-site.amhp.com.br/api/banners/publicados";
    const newsApiUrl =
      "https://api-site.amhp.com.br/api/noticias/recentes-home/4";

    try {
      const [banner, news] = await axios.all([
        axios.get(bannerApiUrl),
        axios.get(newsApiUrl),
      ]);
      setBannerData(banner.data);
      setNewsData(news.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  const renderItemBanner: React.FC<types.BannerItem> = React.useCallback(
    ({ item }) => (
      <BannerTouchable
        onPress={() => {
          if (item.linkRedirecionamento) {
            Linking.openURL(item.linkRedirecionamento);
          }
        }}
        testID="banner-touchable"
      >
        <BannerImages
          source={{ uri: item.urlImagemMobile }}
          testID="banner-image"
        />
      </BannerTouchable>
    ),
    []
  );

  const renderItemNews: React.FC<types.newsItem> = React.useCallback(
    ({ item }) => (
      <>
        <NewsImages
          source={{ uri: `data:image/png;base64,${item.imagem}` }}
          testID="news-image"
        />
        <NewsTime testID="news-time">
          {format(item.dataCriacao, "dd MMM yyyy", {
            locale: ptBR,
          })}
        </NewsTime>
        <NewsTitle testID="news-title">{item.titulo}</NewsTitle>
        <NewsButton>
          <NewsButtonTitle testID="news-button-title">
            Saiba mais
          </NewsButtonTitle>
        </NewsButton>
      </>
    ),
    []
  );

  return (
    <Container>
      <Content>
        <BannerContainer>
          {isLoading ? (
            <Loading testID="loading-banner" />
          ) : (
            <Banners
              data={bannerData}
              renderItem={renderItemBanner as ListRenderItem<any>}
              sliderWidth={300}
              itemWidth={270}
              layout={"default"}
              loop
              autoplay
              autoplayDelay={3000}
              autoplayInterval={3000}
              onSnapToItem={(index) => setActiveSlide(index)}
            />
          )}
        </BannerContainer>
        <BannerContainerIndicator testID="banner-indicator">
          <BannerIndicator
            activeDotIndex={activeSlide}
            dotsLength={bannerData.length}
            dotStyle={{
              width: 5,
              height: 5,
              backgroundColor: "#324c8f",
            }}
          />
        </BannerContainerIndicator>
        <Separator testID="separator" />
        <NewsContainer>
          <LatestNews>
            Últimas {" \n"}
            <LatestNews>Notícias</LatestNews>
          </LatestNews>
          <NewsContainerImages>
            {isLoading ? (
              <Loading testID="loading-news" />
            ) : (
              <News
                data={newsData}
                renderItem={renderItemNews as ListRenderItem<any>}
                sliderWidth={290}
                itemWidth={270}
                layout={"default"}
                loop
                autoplay
                autoplayDelay={3000}
                autoplayInterval={3000}
              />
            )}
          </NewsContainerImages>
        </NewsContainer>
      </Content>
    </Container>
  );
};
