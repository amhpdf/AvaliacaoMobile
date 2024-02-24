import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.logo};
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayDark};
`;
