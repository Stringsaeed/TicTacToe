import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import TicTacToe from "tictactoe-agent";

import CellItem from "../../components/CellItem";
import { BoardT, checkWin, PlayerT } from "../../utils/game";

import styles from "./styles";

const BOARD_SIZE = 9;

const GameScreen: React.FC<any> = ({ route }) => {
  const { side: humanPlayer } = React.useMemo(
    () => route.params,
    [route.params]
  );
  const computerPlayer = React.useMemo(
    () => (humanPlayer === "x" ? "o" : "x"),
    [humanPlayer]
  );
  const [disabledBoard, setDisabledBoard] = React.useState(false);
  const [board, setBoard] = React.useState<BoardT>(
    new Array(BOARD_SIZE).fill("")
  );
  const [computerTurn, setComputerTurn] = React.useState(false);
  const [winner, setWinner] = React.useState<PlayerT | "draw">();

  const insertInBoard = React.useCallback(
    (player: PlayerT, position: number) => {
      if (!board[position]) {
        setBoard((_board) => {
          const newBoard = [..._board];
          newBoard[position] = player;
          return newBoard;
        });
      }
    },
    [board]
  );

  const onHumanTurn = React.useCallback(
    (index: number) => () => {
      insertInBoard(humanPlayer, index);
      setDisabledBoard(true);
      setComputerTurn(true);
    },
    [humanPlayer, insertInBoard]
  );

  const onComputerTurn = React.useCallback(() => {
    const _board = board
      .map((item) => (item ? item.toUpperCase() : "-"))
      .join("");
    const model = new TicTacToe.Model(_board, computerPlayer);
    const recommendation = model.getRecommendation();
    insertInBoard(computerPlayer, recommendation.index);
    setComputerTurn(false);
    setDisabledBoard(false);
  }, [board, computerPlayer, insertInBoard]);

  const resetGame = () => {
    setBoard(new Array(9).fill(""));
    setWinner(undefined);
    setComputerTurn(false);
    setDisabledBoard(false);
  };

  React.useEffect(() => {
    if (computerTurn) {
      onComputerTurn();
    }
  }, [computerTurn, onComputerTurn]);

  React.useEffect(() => {
    if (board.length > 5) {
      if (checkWin(board, humanPlayer)) {
        setWinner(humanPlayer);
      } else if (checkWin(board, computerPlayer)) {
        setWinner(computerPlayer);
      } else if (board.every((cell) => !!cell)) {
        setWinner("draw");
      }
    }
  }, [board, computerPlayer, humanPlayer]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        pointerEvents={disabledBoard ? "none" : "auto"}
        style={styles.board}
      >
        <View style={styles.cellRows}>
          <CellItem index={1} value={board?.[0]} onPress={onHumanTurn(0)} />
          <CellItem index={2} value={board?.[1]} onPress={onHumanTurn(1)} />
          <CellItem index={3} value={board?.[2]} onPress={onHumanTurn(2)} />
        </View>
        <View style={styles.cellRows}>
          <CellItem index={4} value={board?.[3]} onPress={onHumanTurn(3)} />
          <CellItem index={5} value={board?.[4]} onPress={onHumanTurn(4)} />
          <CellItem index={6} value={board?.[5]} onPress={onHumanTurn(5)} />
        </View>
        <View style={styles.cellRows}>
          <CellItem index={7} value={board?.[6]} onPress={onHumanTurn(6)} />
          <CellItem index={8} value={board?.[7]} onPress={onHumanTurn(7)} />
          <CellItem index={9} value={board?.[8]} onPress={onHumanTurn(8)} />
        </View>
        {!!winner && (
          <View style={styles.announceWinner}>
            <Text style={styles.announceWinnerText}>
              {winner === humanPlayer
                ? "YOU WIN! ????????????"
                : winner === computerPlayer
                ? "YOU LOSE! ?????????????"
                : "DRAW!"}
            </Text>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={resetGame}
              style={styles.tryAgainButton}
            >
              <Text style={styles.tryAgainButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default GameScreen;
