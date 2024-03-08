import { Dimensions } from "react-native";
import { Container } from "./styles";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem from "../../components/CarouselCardItem";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;
import data from "../../api/mock";

const Home = () => {
  return (
    <Container>
      <Carousel 
        data={data}
        renderItem={CarouselCardItem}
        sliderHeight={200}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={200}
        useScrollView={true}
        autoplay={true}
        loop={true}
        autoplayDelay={2600}
        autoplayInterval={3000}
      />
    </Container>
  )
}

export default Home;