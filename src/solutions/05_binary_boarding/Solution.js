import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const getSeatId = (boardingPass) => {
  let row = [0, 127];
  let seat = [0, 7];
  boardingPass.split("").forEach((op) => {
    if (op === "F") row[1] = row[1] - (row[1] - row[0] + 1) / 2;
    if (op === "B") row[0] = row[0] + (row[1] - row[0] + 1) / 2;
    if (op === "L") seat[1] = seat[1] - (seat[1] - seat[0] + 1) / 2;
    if (op === "R") seat[0] = seat[0] + (seat[1] - seat[0] + 1) / 2;
  });
  return row[0] * 8 + seat[0];
};

const part1 = (input) => {
  let highestSeatId = 0;
  input.forEach((boardingPass) => {
    const seatId = getSeatId(boardingPass);
    highestSeatId = Math.max(seatId, highestSeatId);
  });
  return highestSeatId;
};

const part2 = (input) => {
  let seatList = [];
  input.forEach((boardingPass) => {
    const seatId = getSeatId(boardingPass);
    seatList.push(seatId);
  });
  seatList = seatList.sort();
  for (let i = 0; i < seatList.length - 1; i++) {
    if (seatList[i + 1] - seatList[i] === 2) return seatList[i] + 1;
  }
  return "n/a";
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
