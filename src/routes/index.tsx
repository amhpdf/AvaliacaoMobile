import React from "react";
import { Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "src/screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SubTitle, Title } from "./styles";
import typ from "./index.d";
import { News } from "src/screens/News";

const Drawer = createDrawerNavigator<typ.ParamList>();

const Routes: React.FC<typ.ParamList> = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Notícias"
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          width: Dimensions.get("window").width / 2.5,
        },
        headerBackground: () => (
          <Drawer.Screen name="Início" component={Home} />
        ),
        headerTitle: () => {
          return (
            <View>
              <Title>amhp</Title>
              <SubTitle>Soluções integradas</SubTitle>
            </View>
          );
        },
      }}
    >
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Notícias" component={News} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Routes;
