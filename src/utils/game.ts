export type PlayerT = "x" | "o";
export type BoardT = PlayerT[];

const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

export const checkWin = (board: BoardT, player: PlayerT) => {
  return WIN_COMBOS.some((combo) =>
    combo.every((index) => board[index] === player)
  );
};
