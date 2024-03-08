// Menu.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/HomeScreen/Home';
import ConveniosScreen from 'src/screens/ConveniosScreen/Convenios';
import NoticiasScreen from 'src/screens/NoticiasScreen/Noticias';
import { colors } from 'src/styles/theme';

const Tab = createBottomTabNavigator();

const Menu: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.navy,
        inactiveTintColor: colors.lightGray,
        style: { backgroundColor: colors.white },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Convenios" component={ConveniosScreen} />
      <Tab.Screen name="Noticias" component={NoticiasScreen} />
    </Tab.Navigator>
  );
};

export default Menu;
