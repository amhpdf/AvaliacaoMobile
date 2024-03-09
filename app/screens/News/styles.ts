import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${ props => props.theme.bg };
`;

export const SectionTitle = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: 25px;
  font-family: ${props => props.theme.fonts.bold};
`;