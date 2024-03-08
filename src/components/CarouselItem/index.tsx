import React from "react";
import * as S from "./styles";

interface CarouselItemProps {
  imageUrl: string;
}

const CarouselItem = ({ imageUrl }: CarouselItemProps) => {
  return (
    <S.Container testID="carousel-item">
      <S.Banner source={{ uri: imageUrl }} />
    </S.Container>
  );
};

export default CarouselItem;
