import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  padding: 10px;
`;

export const ContainerLetterOfGroup = styled.View`
  border-bottom-width: 1px;
  border-color: ${theme.DEFAULT_COLORS.PRIMARY_COLOR};
`;

export const LetterOfGroup = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const NameConvenio = styled.Text`
  font-size: 16px;
`;
