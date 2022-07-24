import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Palette } from "@styles";
import MemoCrossIcon from "@assets/Cross";
import MemoCircleIcon from "@assets/Circle";

import styles, { ICON_SIZE } from "./styles";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const navigateToGame = React.useCallback(
    (side: "x" | "o") => () => {
      navigation.navigate("Game", { side });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Select Side:</Text>
      <View style={styles.row}>
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.card}
          onPress={navigateToGame("o")}
        >
          <MemoCircleIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
            pathFill={Palette.content}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.card}
          onPress={navigateToGame("x")}
        >
          <MemoCrossIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
            pathFill={Palette.background}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
