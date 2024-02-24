import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Content = styled.View`
  margin: 10px;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayDarkMedium};
  margin-bottom: 10px;
`;

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.logo,
  size: "small",
}))`
  flex: 1;
  align-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Separator = styled.View`
  height: 1px;
  width: 320px;
  margin-left: 10px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-width: 0.5px;
  margin-vertical: 20px;
`;

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
