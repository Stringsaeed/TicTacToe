import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import CircleIcon from "../assets/Circle";
import CrossIcon from "../assets/Cross";
import { CELL_WIDTH, ICON_SIZE } from "../constants";
import { Palette } from "../styles";
import { PlayerT } from "../utils/game";

interface CellProps {
  index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  value?: PlayerT;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  cell: {
    width: CELL_WIDTH,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Palette.white,
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  borderRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
  },
});

const getStyles = (index: number) => {
  if ([1, 2, 4, 5].includes(index)) {
    return { ...styles.cell, ...styles.borderBottom, ...styles.borderRight };
  } else if ([3, 6].includes(index)) {
    return { ...styles.cell, ...styles.borderBottom };
  } else if ([7, 8].includes(index)) {
    return { ...styles.cell, ...styles.borderRight };
  } else {
    return styles.cell;
  }
};

const CellItem: React.FC<CellProps> = ({ index, value, onPress }) => {
  return (
    <TouchableOpacity
      {...{ onPress }}
      disabled={!!value}
      style={getStyles(index)}
    >
      {value === "x" ? (
        <CrossIcon width={ICON_SIZE} height={ICON_SIZE} />
      ) : value === "o" ? (
        <CircleIcon width={ICON_SIZE} height={ICON_SIZE} />
      ) : null}
    </TouchableOpacity>
  );
};

export default CellItem;
