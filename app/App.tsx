import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import theme from "./theme"
import loadFonts from "./theme/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Agreements, News } from "./screens";

const Drawer = createDrawerNavigator();

export default function App() {
  loadFonts();
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="News" component={News}/>
        <Drawer.Screen name="Agreements" component={Agreements}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}
