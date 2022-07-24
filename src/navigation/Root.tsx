import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, GameScreen } from "@screens";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator: React.VFC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Game" component={GameScreen} />
    </Navigator>
  );
};

export default RootNavigator;
