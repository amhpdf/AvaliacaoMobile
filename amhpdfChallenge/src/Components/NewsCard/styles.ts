import styled from 'styled-components/native';
import COLORS from '../../Shared/colors';

export const NewsContainer = styled.View`
  flex-direction: row;
  margin: 12px;
`;

export const NewsTextContainer = styled.View`
  width: 80%;
  justify-content: space-between;
`;

export const NewsTitle = styled.Text`
  font-size: 14px;
  color: ${COLORS.blue};
  font-weight: bold;
  padding-left: 8px;
`;

export const NewsDate = styled.Text`
  font-size: 12px;
  color: ${COLORS.gray};
  font-weight: bold;
  padding-left: 8px;
`;

export const NewsImage = styled.Image`
  flex: 1;
`;

export const FullContainer = styled.View`
  margin: 48px 12px;
`;

export const FullNewsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FullNewsTitle = styled.Text`
  font-size: 18px;
  color: ${COLORS.blue};
  font-weight: bold;
`;

export const FullNewsImage = styled.Image`
  width: 100%;
  height: 240px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Summary = styled.Text`
  font-size: 14px;
  color: ${COLORS.gray};
`;