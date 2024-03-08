import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const ContentNews = styled.View`
  margin-top: 30px;
  background-color: ${theme.DEFAULT_COLORS.SECOND_COLOR};
  height: 300px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ContentNewsTitle = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const styles = StyleSheet.create({
  pagerView: {
    height: 300,
  },
});
