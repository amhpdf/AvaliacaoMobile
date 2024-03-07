import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import theme from "./src/theme";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor={theme.DEFAULT_COLORS.PRIMARY_COLOR}
        translucent={false}
        style="light"
        
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
