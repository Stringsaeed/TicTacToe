import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./App";

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
