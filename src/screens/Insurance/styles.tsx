import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Content = styled.View`
  margin: 10px;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayDarkMedium};
  margin-bottom: 30px;
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
  width: 340px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-width: 0.5px;
  margin-vertical: 10px;
`;

export const InsuranceTitle = styled.Text`
  font-size: 14px;
  text-align: justify;
  margin-top: 6px;
`;
