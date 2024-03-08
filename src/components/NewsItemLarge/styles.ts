import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  height: 400px;
  background-color: #fff;
  padding: 10px;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 180px;
`;

export const Date = styled.Text`
  margin: 10px 0px;
  font-size: 14px;
`;

export const Summary = styled.Text`
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${theme.DEFAULT_COLORS.PRIMARY_COLOR};
  font-size: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0px;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;
