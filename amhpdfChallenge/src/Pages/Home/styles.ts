import styled from 'styled-components/native'
import COLORS from '../../Shared/colors';

export const Container = styled.ScrollView`
  background-color: ${COLORS.white};
  flex: 1;
  padding-top: 4px;
`;

export const NewsScroll = styled.View`
  padding-top: 8px;
`;

export const SessionTitle = styled.Text`
  font-size: 24px;
  color: ${COLORS.gray};
  font-weight: bold;
  padding: 8px;
`;

export const Divider = styled.View`
  height: 2px;
  background-color: ${COLORS.gray};
  width: 100%;
`;

export const NewsContainer = styled.View`
  flex-direction: row;
  margin: 12px;
`;

export const NewsTextContainer = styled.View`
  flex: 1;
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