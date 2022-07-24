import { Dimensions, StyleSheet } from "react-native";

import { Palette } from "@styles";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - (48 + 16)) / 2;
export const ICON_SIZE = CARD_WIDTH / 2;

const homeStyles = StyleSheet.create({
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

export default homeStyles;
