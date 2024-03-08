import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}