import React from "react";
import { StatusBar, View } from "react-native";
import { Providers } from "..";
import { renderApp } from "__test__/helpers/test-app";
import Constants from "expo-constants";

describe("Component Providers", () => {
  it("Should render in the correct sequence", () => {
    StatusBar.setBackgroundColor = jest.fn();

    const { getByTestId } = renderApp(
      <Providers>
        <View testID="view" />
      </Providers>,
      { wrapper: undefined }
    );

    const statusBar = getByTestId("providers-status-bar");
    expect(statusBar).toBeOnTheScreen();
    expect(statusBar).toHaveStyle({
      height: Constants.statusBarHeight,
      backgroundColor: expect.any(String),
    });

    const safeView = getByTestId("providers-safe");
    expect(safeView).toHaveStyle({ flex: 1 });

    const theme = safeView.props.children.props;
    expect(theme.theme).toEqual(expect.any(Object));
  });
});
