import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Menu from "./components/Menu/Menu";

const App: React.FC = () => {
    return (
      <NavigationContainer>
        <Menu />
      </NavigationContainer>
    );
  };
export { App };
