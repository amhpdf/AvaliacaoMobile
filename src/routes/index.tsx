import React from "react";
import { Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SubTitle, Title } from "./styles";
import { Home } from "src/screens/Home";
import { News } from "src/screens/News";
import { Insurance } from "src/screens/Insurance";
import typ from "./index.d";

const Drawer = createDrawerNavigator<typ.ParamList>();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Início"
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
      <Drawer.Screen name="Convênios" component={Insurance} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Routes;
