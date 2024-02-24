import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, RenderOptions } from "@testing-library/react-native";
import theme from "src/global/theme";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import "@testing-library/jest-native/";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme as DefaultTheme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

const renderApp = (el: React.ReactElement, options?: RenderOptions) =>
  render(el, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { renderApp };
