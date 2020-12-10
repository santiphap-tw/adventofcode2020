import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import input03 from "./case03/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output03Part1 from "./case03/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";
import output03Part2 from "./case03/output.part2.txt";

const part1 = (input) => {
  input = input.map((i) => parseInt(i)).sort((a, b) => a - b);
  let countDiff1 = 0;
  let countDiff3 = 1;
  let previousJolt = 0;
  input.forEach((adapter) => {
    if (adapter - previousJolt === 1) countDiff1++;
    if (adapter - previousJolt === 3) countDiff3++;
    previousJolt = adapter;
  });
  return countDiff1 * countDiff3;
};

const part2 = (input) => {
  input = input.map((i) => parseInt(i)).sort((a, b) => a - b);
  input = [0, ...input, Math.max(...input) + 3];
  let countArrangement = [];
  for (const i in input) {
    countArrangement[i] = 0;
  }
  countArrangement[0] = 1;
  for (let i = 0; i < input.length - 1; i++) {
    if (input.indexOf(input[i] + 1) >= 0)
      countArrangement[input.indexOf(input[i] + 1)] += countArrangement[i];
    if (input.indexOf(input[i] + 2) >= 0)
      countArrangement[input.indexOf(input[i] + 2)] += countArrangement[i];
    if (input.indexOf(input[i] + 3) >= 0)
      countArrangement[input.indexOf(input[i] + 3)] += countArrangement[i];
  }
  return countArrangement[input.length - 1];
};

const Solution = {
  part1: {
    solution: part1,
    input: [input01, input02, input03],
    output: [output01Part1, output02Part1, output03Part1],
  },
  part2: {
    solution: part2,
    input: [input01, input02, input03],
    output: [output01Part2, output02Part2, output03Part2],
  },
};

export default Solution;
