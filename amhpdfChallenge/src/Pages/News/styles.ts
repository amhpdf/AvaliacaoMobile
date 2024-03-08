import styled from 'styled-components/native';
import COLORS from '../../Shared/colors';

export const Container = styled.ScrollView`
  background-color: ${COLORS.white};
  flex: 1;
`;

export const Loader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
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