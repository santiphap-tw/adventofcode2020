import { ReadFileToArray, ReadFileToText } from "../../utils/io/ReadFileToText";
import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  const result = parseInt(input[0]) + parseInt(input[1]);
  return result.toString();
};

const part2 = (input) => {
  const result = parseInt(input[0]) * parseInt(input[1]);
  return result.toString();
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
