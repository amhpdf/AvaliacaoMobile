import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const SectionTitle = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: ${props => props.theme.fonts.bold};
`;