import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const getSeatInfo = (state, row, col, direction = "") => {
  if (state[row] && state[row][col]) {
    if (state[row][col] === ".") {
      if (direction === "") return state[row][col];
      if (direction === "U") return getSeatInfo(state, row - 1, col, "U");
      if (direction === "D") return getSeatInfo(state, row + 1, col, "D");
      if (direction === "L") return getSeatInfo(state, row, col - 1, "L");
      if (direction === "R") return getSeatInfo(state, row, col + 1, "R");
      if (direction === "UL") return getSeatInfo(state, row - 1, col - 1, "UL");
      if (direction === "UR") return getSeatInfo(state, row - 1, col + 1, "UR");
      if (direction === "DL") return getSeatInfo(state, row + 1, col - 1, "DL");
      if (direction === "DR") return getSeatInfo(state, row + 1, col + 1, "DR");
    }
    return state[row][col];
  }
  return ".";
};

const part1 = (input) => {
  input = input.map((i) => i.split(""));
  let state = JSON.parse(JSON.stringify(input));
  let prevState = [];
  const countAdjecentOccupySeat = (state, row, col) => {
    let countSeat = 0;
    if (getSeatInfo(state, row, col + 1) === "#") countSeat++;
    if (getSeatInfo(state, row, col - 1) === "#") countSeat++;
    if (getSeatInfo(state, row + 1, col) === "#") countSeat++;
    if (getSeatInfo(state, row + 1, col + 1) === "#") countSeat++;
    if (getSeatInfo(state, row + 1, col - 1) === "#") countSeat++;
    if (getSeatInfo(state, row - 1, col) === "#") countSeat++;
    if (getSeatInfo(state, row - 1, col + 1) === "#") countSeat++;
    if (getSeatInfo(state, row - 1, col - 1) === "#") countSeat++;
    return countSeat;
  };
  do {
    prevState = JSON.parse(JSON.stringify(state));
    for (let row = 0; row < state.length; row++) {
      for (let col = 0; col < state[row].length; col++) {
        if (prevState[row][col] === ".") continue;
        if (
          prevState[row][col] === "L" &&
          countAdjecentOccupySeat(prevState, row, col) === 0
        ) {
          state[row][col] = "#";
        }
        if (
          prevState[row][col] === "#" &&
          countAdjecentOccupySeat(prevState, row, col) >= 4
        ) {
          state[row][col] = "L";
        }
      }
    }
  } while (JSON.stringify(state) !== JSON.stringify(prevState));
  let countSeat = 0;
  for (const row in state) {
    for (const col in state[row]) {
      if (state[row][col] === "#") {
        countSeat++;
      }
    }
  }
  return countSeat;
};

const part2 = (input) => {
  input = input.map((i) => i.split(""));
  let state = JSON.parse(JSON.stringify(input));
  let prevState = [];
  const countAdjecentOccupySeat = (state, row, col) => {
    let countSeat = 0;
    if (getSeatInfo(state, row, col + 1, "R") === "#") countSeat++;
    if (getSeatInfo(state, row, col - 1, "L") === "#") countSeat++;
    if (getSeatInfo(state, row + 1, col, "D") === "#") countSeat++;
    if (getSeatInfo(state, row + 1, col + 1, "DR") === "#") countSeat++;
    if (getSeatInfo(state, row + 1, col - 1, "DL") === "#") countSeat++;
    if (getSeatInfo(state, row - 1, col, "U") === "#") countSeat++;
    if (getSeatInfo(state, row - 1, col + 1, "UR") === "#") countSeat++;
    if (getSeatInfo(state, row - 1, col - 1, "UL") === "#") countSeat++;
    return countSeat;
  };
  do {
    prevState = JSON.parse(JSON.stringify(state));
    for (let row = 0; row < state.length; row++) {
      for (let col = 0; col < state[row].length; col++) {
        if (prevState[row][col] === ".") continue;
        if (
          prevState[row][col] === "L" &&
          countAdjecentOccupySeat(prevState, row, col) === 0
        ) {
          state[row][col] = "#";
        }
        if (
          prevState[row][col] === "#" &&
          countAdjecentOccupySeat(prevState, row, col) >= 5
        ) {
          state[row][col] = "L";
        }
      }
    }
  } while (JSON.stringify(state) !== JSON.stringify(prevState));
  let countSeat = 0;
  for (const row in state) {
    for (const col in state[row]) {
      if (state[row][col] === "#") {
        countSeat++;
      }
    }
  }
  return countSeat;
};

const Solution = {
  part1: {
    solution: part1,
    input: [input01, input02],
    output: [output01Part1, output02Part1],
  },
  part2: {
    solution: part2,
    input: [input01, input02],
    output: [output01Part2, output02Part2],
  },
};

export default Solution;
