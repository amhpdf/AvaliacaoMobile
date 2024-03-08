import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from 'src/styles/commonStyles';

const ConveniosScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.textWhite}>Conteúdo dos Convênios</Text>
    </View>
  );
};

export default ConveniosScreen;
