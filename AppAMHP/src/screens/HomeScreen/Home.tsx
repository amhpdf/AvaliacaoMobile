import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from 'src/styles/commonStyles';

const HomeScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.textWhite}>Conteúdo da Home</Text>
    </View>
  );
};

export default HomeScreen;
