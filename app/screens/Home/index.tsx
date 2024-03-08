import React, { useState, useEffect } from 'react'
import { Dimensions } from "react-native";
import { Container } from "./styles";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem from "../../components/CarouselCardItem";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;
import { getBanners } from '../../services/api';
import { IBanner } from '../../services/api/types';
import { IImage } from './types';

const Home = () => {
  const [banners, setBanners] = useState<IImage[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await getBanners();
      const mountData: IImage[] = result.data.map((item: IBanner): Object => {
        return { imgUrl: item.urlImagemMobile }
      });
      setBanners(mountData);
    }
    getData();
  }, []);

  return (
    <Container>
      <Carousel
        data={banners}
        renderItem={CarouselCardItem}
        sliderHeight={250}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={250}
        useScrollView={true}
        autoplay={true}
        loop={true}
        autoplayDelay={2000}
        autoplayInterval={3000}
      />
</Container>
  )
}

export default Home;