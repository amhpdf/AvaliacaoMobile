import React, { Component } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components/native";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import theme from "src/global/theme";
import Constants from "expo-constants";
import types from "./index.d";

const Providers: React.FC<types.Props> = ({ children }) => (
  <>
    <Statusbar />
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme as DefaultTheme}>{children}</ThemeProvider>
    </SafeAreaView>
  </>
);

export { Providers };

class Statusbar extends Component {
  render() {
    Platform.OS === "android" &&
      StatusBar.setBackgroundColor(theme.colors.grayLight, true);
    return (
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="dark-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: theme.colors.grayLight,
  },
});