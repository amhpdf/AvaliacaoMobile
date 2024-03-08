import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'src/screens/HomeScreen/Home';
import ConveniosScreen from 'src/screens/ConveniosScreen/Convenios';
import NoticiasScreen from 'src/screens/NoticiasScreen/Noticias';
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Convenios" component={ConveniosScreen} />
        <Stack.Screen name="Noticias" component={NoticiasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
