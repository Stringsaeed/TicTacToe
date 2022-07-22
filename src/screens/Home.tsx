import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import MemoCircleIcon from "../assets/Circle";
import MemoCrossIcon from "../assets/Cross";
import { Palette } from "../styles";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - (48 + 16)) / 2;
const ICON_SIZE = CARD_WIDTH / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: Palette.background,
  },
  card: {
    width: CARD_WIDTH,
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Palette.card,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Palette.content,
    textAlign: "center",
    marginBottom: 24,
  },
});

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
