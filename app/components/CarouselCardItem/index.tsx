import { View } from 'react-native';
import { IPropsCardItem } from './types';
import { Img } from './styles';

const CarouselCardItem = ({item, index}: IPropsCardItem) => {
  return (
   <View key={index}>
     <Img source={{ uri: item.imgUrl }} />
   </View>
  )
}

export default CarouselCardItem;