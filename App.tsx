import React from "react";
import { Providers } from "src/providers";
import Routes from "src/routes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
