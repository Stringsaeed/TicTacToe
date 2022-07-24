import { StyleSheet } from "react-native";

import { Palette } from "../../styles";
import { BOARD_WIDTH } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    backgroundColor: Palette.card,
    width: BOARD_WIDTH,
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.white,
    overflow: "hidden",
  },
  cellRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  announceWinner: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Palette.black + "99",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  announceWinnerText: {
    fontSize: 32,
    color: Palette.white,
    textAlign: "center",
  },
  tryAgainButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: Palette.background,
    marginTop: 16,
  },
  tryAgainButtonText: {
    fontSize: 16,
    color: Palette.black,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
