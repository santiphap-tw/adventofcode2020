import { ReadFileToArray, ReadFileToText } from "../../utils/io/ReadFileToText";
import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const parseIntArray = (array) => {
  return array.map((entry) => parseInt(entry)).sort((a, b) => a - b);
};

const part1 = (input) => {
  input = parseIntArray(input);
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] > 2020) continue;
      if (input[i] + input[j] === 2020) return (input[i] * input[j]).toString();
    }
  }
};

const part2 = (input) => {
  input = parseIntArray(input);
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        if (input[i] + input[j] + input[k] > 2020) continue;
        if (input[i] + input[j] + input[k] === 2020)
          return (input[i] * input[j] * input[k]).toString();
      }
    }
  }
};

const getInput = async () => {
  return [await ReadFileToArray(input01), await ReadFileToArray(input02)];
};

const getOutputPart1 = async () => {
  return [
    await ReadFileToText(output01Part1),
    await ReadFileToText(output02Part1),
  ];
};

const getOutputPart2 = async () => {
  return [
    await ReadFileToText(output01Part2),
    await ReadFileToText(output02Part2),
  ];
};

const Solution = {
  part1: {
    solution: part1,
    input: getInput(),
    output: getOutputPart1(),
  },
  part2: {
    solution: part2,
    input: getInput(),
    output: getOutputPart2(),
  },
};

export default Solution;
