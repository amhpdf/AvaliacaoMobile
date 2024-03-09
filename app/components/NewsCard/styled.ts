import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 12px;
  margin-top: 12px;
  margin-right: 16px;
  margin-left: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

// Container Modal Open
export const CardContainerModal = styled.View`
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  elevation: 5;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

// Image Modal Open
export const CardImageModal = styled.Image`
  width: 100%;
  height: 200px;
`;

export const TextContainer = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 6px;
  color: #333;
  font-family: ${props => props.theme.fonts.regular};
`;

export const Paragraph = styled.Text`
  font-size: 16px;
  color: #666;
  line-height: 22px;
  font-family: ${props => props.theme.fonts.light};
`;