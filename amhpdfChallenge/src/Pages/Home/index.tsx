/* eslint-disable prettier/prettier */
import { ActivityIndicator, Dimensions } from 'react-native';
import { getBanners, getLastNews } from '../../Services/api';
import { CarouselImage, Container, Divider, Loader, NewsScroll, SessionTitle } from './styles';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import COLORS from '../../Shared/colors';
import { NewsCard } from '../../Components/NewsCard';
import { NewsProps } from '../../Shared/globalTypes';

type BannerProps = {
  name: string;
  id: number;
  urlImagemMobile: string;
};

const Home = () => {
  const [banners, setBanners] = useState<BannerProps[]>([]);
  const [lastNews, setLastNews] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const windowWidth = Dimensions.get('window').width;

  const getBannersFromAPI = async () => {
    const bannersFromAPI = await getBanners();

    setBanners(bannersFromAPI);
  };

  const getLastNewsFromAPI = async () => {
    const newsFromAPI = await getLastNews();

    setLastNews(newsFromAPI);
  };

  useEffect(() => {

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

  const renderCarouselItem = (banner: BannerProps) => (
    <CarouselImage resizeMode="cover" source={{ uri: banner.urlImagemMobile }} key={banner.id} />
  );

  return (
    <Container>
      {loading ?
        <Loader>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </Loader> :
        <>
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
          <NewsScroll>
            <SessionTitle>Últimas notícias</SessionTitle>
              <Divider />
              {lastNews.map(news => <NewsCard newsData={news} /> )}
          </NewsScroll>
        </>
      }
    </Container>
  );
};

export default Home;
