import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, View, Text } from "react-native";
import { Container, SectionTitle, Title } from "./styles";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem from "../../components/CarouselCardItem";
import { getBanners } from '../../services/api';
import { IBanner } from '../../services/api/types';
import { IImage } from './types';
import { INewsRecentHome } from '../../services/api/types';
import { getNewsRecentHome } from '../../services/api';
import NewsCard from "../../components/NewsCard";
import Loading from '../../components/Loading';

const Home = () => {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const [banners, setBanners] = useState<IImage[]>([]);
  const [news, setNews] = useState<INewsRecentHome[]>([]);
  const [loadingBanner, setLoadingBanner] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await getBanners();
      const mountData: IImage[] = result.data.map((item: IBanner): Object => {
        return { imgUrl: item.urlImagemMobile }
      });
      setBanners(mountData);
      setLoadingBanner(false);
    }

    const getNewsHome = async () => {
      const AMOUNT_OF_NEWS = 4;
      const response = await getNewsRecentHome(AMOUNT_OF_NEWS);
      const data: INewsRecentHome[] = response.data;
      setNews(data);
      setLoadingNews(false);
   }

   getNewsHome();
   getData();
  }, []);

  if (loadingBanner || loadingNews) {
     return <Loading />
  }

  return (
    <Container>
      <ScrollView>
        <Carousel
          data={banners}
          renderItem={CarouselCardItem}
          sliderHeight={250}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH}
          itemHeight={250}
          useScrollView={true}
          autoplay={true}
          loop={true}
          autoplayDelay={2000}
          autoplayInterval={3000}
        />
        <SectionTitle>
          <Title>Últimas notícias</Title>
        </SectionTitle>
        <ScrollView>{news.map((el) => <NewsCard key={el.id} data={el} />)}</ScrollView>
      </ScrollView>
    </Container>
  )
}

export default Home;