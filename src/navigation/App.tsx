import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import GameScreen from "../screens/Game";

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Game" component={GameScreen} />
    </Navigator>
  );
};

export default AppStack;
