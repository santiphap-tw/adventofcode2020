import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const doOp = (opString) => {
  const op = opString.split(" ")[0].trim();
  const value = parseInt(opString.split(" ")[1]);
  if (op === "nop") return [1, 0];
  if (op === "acc") {
    return [1, value];
  }
  if (op === "jmp") {
    return [value, 0];
  }
  return [0, 0];
};

const runProgram = (input) => {
  let countAcc = 0;
  let index = 0;
  let visited = [];
  while (!visited[index] && index < input.length) {
    visited[index] = true;
    const [nextIndex, acc] = doOp(input[index]);
    index += nextIndex;
    countAcc += acc;
  }
  return [countAcc, !(index < input.length)];
};

const part1 = (input) => {
  const [acc, isTerminated] = runProgram(input);
  return acc;
};

const part2 = (input) => {
  for (const i in input) {
    const [acc, isTerminated] = runProgram(input);
    if (isTerminated) return acc;
    if (input[i].includes("nop")) {
      input[i] = input[i].replace("nop", "jmp");
      const [acc, isTerminated] = runProgram(input);
      if (isTerminated) return acc;
      input[i] = input[i].replace("jmp", "nop");
    } else if (input[i].includes("jmp")) {
      input[i] = input[i].replace("jmp", "nop");
      const [acc, isTerminated] = runProgram(input);
      if (isTerminated) return acc;
      input[i] = input[i].replace("nop", "jmp");
    }
  }
  return 0;
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
