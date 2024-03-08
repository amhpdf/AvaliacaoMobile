/* eslint-disable prettier/prettier */
import { ActivityIndicator, Dimensions, Image, View } from 'react-native';
import { getBanners, getLastNews } from '../../Services/api';
import { Container, Divider, NewsContainer, NewsDate, NewsScroll, NewsTextContainer, NewsTitle, SessionTitle } from './styles';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import COLORS from '../../Shared/colors';

type BannerProps = {
  name: string;
  id: number;
  urlImagemMobile: string;
};

type LastNewsprops = {
  id: number;
  titulo: string;
  resumo: string;
  dataCriacao: string;
  imagem: string;
};

const Home = () => {
  const [banners, setBanners] = useState<BannerProps[]>([]);
  const [lastNews, setLastNews] = useState<LastNewsprops[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const getBannersFromAPI = async () => {
      const bannersFromAPI = await getBanners();

      setBanners(bannersFromAPI);
    };

    const getLastNewsFromAPI = async () => {
      const newsFromAPI = await getLastNews();

      setLastNews(newsFromAPI);
    };

    try {

      setLoading(true);
      getBannersFromAPI();
      getLastNewsFromAPI();

    } catch (error) {
      throw new Error(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }, []);

  const formatDate = (datetoFormart: string) => {
    const year = datetoFormart.slice(0, 4);
    const month = datetoFormart.slice(5, 7);
    const day = datetoFormart.slice(8, 10);

    return day + '/' + month + '/' + year;
  };

  const renderCarouselItem = (banner: BannerProps) => (
    <Image style={{ height: 320 }}  resizeMode="cover" source={{ uri: banner.urlImagemMobile }} key={banner.id} />
  );

  const renderLastNews = (newsData : LastNewsprops) => (
    <NewsContainer key={newsData.id}>
      <Image source={{ uri: `data:image/jpeg;base64,${newsData.imagem}` }} style={{ flex: 1 }} />
      <NewsTextContainer>
        <NewsTitle>{newsData.titulo}</NewsTitle>
        <NewsDate>{formatDate(newsData.dataCriacao)}</NewsDate>
      </NewsTextContainer>
    </NewsContainer>
  );

  return (
    <Container>
      {Boolean(banners.length) &&
        <Carousel
          loop
          autoPlay={true}
          data={banners}
          width={windowWidth}
          height={320}
          scrollAnimationDuration={4000}
          renderItem={({ item }) => renderCarouselItem(item)}
        />}
      {loading ?
        <ActivityIndicator size={'small'} color={COLORS.blue} /> :
        <NewsScroll>
          <SessionTitle>Últimas notícias</SessionTitle>
            <Divider />
            {lastNews.map(news => renderLastNews(news))}
        </NewsScroll>
        }
    </Container>
  );
};

export default Home;
