import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  height: 200px;
  background-color: #fff;
  width: 180px;
  padding: 10px;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 80px;
`;

export const Date = styled.Text`
  font-size: 14px;
`;

export const Summary = styled.Text`
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  padding: 6px;
  background-color: ${theme.DEFAULT_COLORS.PRIMARY_COLOR};
  font-size: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;
