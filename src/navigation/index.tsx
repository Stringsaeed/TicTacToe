import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./Root";

const AppNavigation: React.VFC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
