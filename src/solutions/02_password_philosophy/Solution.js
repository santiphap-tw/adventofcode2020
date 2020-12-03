import { ReadFileToArray, ReadFileToText } from "../../utils/io/ReadFileToText";
import input01 from "./input.01.txt";
import input02 from "./input.02.txt";
import outputPart101 from "./output.part1.01.txt";
import outputPart102 from "./output.part1.02.txt";
import outputPart201 from "./output.part2.01.txt";
import outputPart202 from "./output.part2.02.txt";

const part1 = (input) => {
  let countValid = 0;
  input.forEach((entry) => {
    const rule = entry.split(":")[0].trim();
    const target = rule.split(" ")[1].trim();
    const floor = parseInt(rule.split(" ")[0].split("-")[0]);
    const ceil = parseInt(rule.split(" ")[0].split("-")[1]);
    const password = entry.split(":")[1].trim();
    const countTarget = password.split(target).length - 1;
    if (countTarget >= floor && countTarget <= ceil) {
      countValid++;
    }
  });
  return countValid.toString();
};

const part2 = (input) => {
  let countValid = 0;
  input.forEach((entry) => {
    const rule = entry.split(":")[0].trim();
    const target = rule.split(" ")[1].trim();
    const pos1 = parseInt(rule.split(" ")[0].split("-")[0]) - 1;
    const pos2 = parseInt(rule.split(" ")[0].split("-")[1]) - 1;
    const password = entry.split(":")[1].trim();
    if (
      (password.charAt(pos1) === target) !==
      (password.charAt(pos2) === target)
    ) {
      countValid++;
    }
  });
  return countValid.toString();
};

const getInput = async () => {
  return [await ReadFileToArray(input01), await ReadFileToArray(input02)];
};

const getOutputPart1 = async () => {
  return [
    await ReadFileToText(outputPart101),
    await ReadFileToText(outputPart102),
  ];
};

const getOutputPart2 = async () => {
  return [
    await ReadFileToText(outputPart201),
    await ReadFileToText(outputPart202),
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
