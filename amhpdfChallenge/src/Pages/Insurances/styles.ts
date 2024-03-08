import styled from 'styled-components/native'
import COLORS from '../../Shared/colors';

export const Container = styled.ScrollView`
  background-color: ${COLORS.white};
  flex: 1;
  padding: 16px;
`;

export const ScrollContent = styled.View`
  background-color: white;
  flex: 1;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${COLORS.gray};
  font-weight: bold;
`;

export const CharacterDivider = styled.View`
  flex: 1;
  border-bottom-width: 2px;
  border-bottom-color: ${COLORS.blue};
  border-top-width: 16px;
  border-top-color: ${COLORS.white};
  margin-bottom: 8px;
`;

export const Character = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: bold;
  margin-left: 12px;
`;

export const Nickname = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-left: 12px;
  margin-bottom: 14px;
`;