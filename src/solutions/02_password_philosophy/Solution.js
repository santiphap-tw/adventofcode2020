import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

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
