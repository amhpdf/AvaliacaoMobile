import React, { useState, useEffect } from 'react'
import { Dimensions, FlatList, ScrollView } from "react-native";
import { Container } from "./styles";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem from "../../components/CarouselCardItem";
import { getBanners } from '../../services/api';
import { IBanner } from '../../services/api/types';
import { IImage } from './types';
import { INewsRecentHome } from '../../services/api/types';
import { getNewsRecentHome } from '../../services/api';
import NewsCard from "../../components/NewsCard";

const Home = () => {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const [banners, setBanners] = useState<IImage[]>([]);
  const [news, setNews] = useState<INewsRecentHome[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getBanners();
      const mountData: IImage[] = result.data.map((item: IBanner): Object => {
        return { imgUrl: item.urlImagemMobile }
      });
      setBanners(mountData);
    }

    const getNewsHome = async () => {
      const AMOUNT_OF_NEWS = 4;
      const response = await getNewsRecentHome(AMOUNT_OF_NEWS);
      const data: INewsRecentHome[] = response.data;
      setNews(data);
   }

   getNewsHome();
   getData();
  }, []);

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
        { 
          <FlatList
            data={news}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <NewsCard data={item} /> }
          />  
        }
      </ScrollView>
    </Container>
  )
}

export default Home;