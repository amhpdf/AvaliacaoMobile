import { ActivityIndicator } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  margin: 10px;
  flex-direction: column;
`;

export const BannerContainer = styled.View`
  flex-direction: row;
  height: 180px;
  margin-top: 16px;
`;

export const BannerTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;

export const BannerImages = styled.Image.attrs({ resizeMode: "stretch" })`
  height: 180px;
  width: 101%;
  border-radius: 10px;
`;

export const BannerContainerIndicator = styled.View`
  height: 20px;
  width: 60px;
  align-self: center;
  justify-content: center;
  margin-top: 5px;
`;

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.logo,
  size: "small",
}))`
  flex: 1;
  align-content: center;
`;

export const Banners = styled(Carousel)``;

export const BannerIndicator = styled(Pagination)``;

export const DescriptionContainer = styled.View`
  margin: 10px 0;
`;

export const DescriptionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.Text``;

export const Separator = styled.View`
  height: 1px;
  width: 300px;
  margin-left: 20px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-width: 0.5px;
  margin-vertical: 10px;
`;

export const NewsContainer = styled.View`
  height: 100%;
`;

export const LatestNews = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayDarkMedium};
`;

export const NewsContainerImages = styled.View`
  margin-top: 10px;
  align-self: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grayMedium};
  border-radius: 10px;
  padding-top: 10px;
  height: 340px;
  width: 300px;
`;

export const News = styled(Carousel)``;

export const NewsImages = styled.Image.attrs({ resizeMode: "stretch" })`
  width: 101%;
  height: 180px;
  border-radius: 10px;
`;

export const NewsTime = styled.Text`
  margin-top: 6px;
  font-weight: bold;
`;

export const NewsTitle = styled.Text`
  font-size: 14px;
  text-align: justify;
  margin-top: 6px;
`;

export const NewsButton = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.grayDarkLight};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 16px;
`;

export const NewsButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;
