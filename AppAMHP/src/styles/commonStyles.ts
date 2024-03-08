import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.navy,
  },
  textWhite: {
    color: colors.white,
  },
  textLightGray: {
    color: colors.lightGray,
  },
});
