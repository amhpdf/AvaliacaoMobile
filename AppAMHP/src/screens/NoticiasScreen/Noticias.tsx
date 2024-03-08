import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from 'src/styles/commonStyles';

const NoticiasScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.textWhite}>Conteúdo das Notícias</Text>
    </View>
  );
};

export default NoticiasScreen;
