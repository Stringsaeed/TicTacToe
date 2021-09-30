import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const BASE_PADDING = 24;
export const BOARD_WIDTH = width - BASE_PADDING * 2;
export const CELL_WIDTH = BOARD_WIDTH / 3;
export const ICON_SIZE = CELL_WIDTH / 2;
