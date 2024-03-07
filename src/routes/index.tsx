import React from "react";
import { RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import ConveniosScreen from "../screens/Convenios";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import NoticiasScreen from "../screens/Noticias";

export type StackParamList = {
  TabNavigator: undefined;
  Homeee: undefined;
  Convenios: undefined;
  Noticias: undefined;
};

export interface PagePropsUser<T extends keyof StackParamList> {
  navigation: NativeStackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
}

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.DEFAULT_COLORS.PRIMARY_COLOR,
        },
        headerTintColor: '#fff',
        headerShown: true,
        tabBarActiveTintColor: theme.DEFAULT_COLORS.PRIMARY_COLOR,
        tabBarInactiveTintColor: theme.DEFAULT_COLORS.SECOND_COLOR,
        tabBarItemStyle: {
          padding: 2,
        },
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Convênios",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="hospital-o" size={24} color={color} />
          ),
        }}
        name="Convênios"
        component={ConveniosScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Notícias",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="newspaper-o" size={24} color={color} />
          ),
        }}
        name="Notícias"
        component={NoticiasScreen}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default Routes;
