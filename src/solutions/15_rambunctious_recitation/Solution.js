import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const spokenValue = (input, target) => {
  input = input[0].split(",").map((i) => parseInt(i.trim()));
  let counter = new Array(target);
  let pos = 0;
  let previous = 0;
  for (; pos < input.length; pos++) {
    counter[input[pos]] = [pos, pos];
    previous = input[pos];
  }
  for (; pos < target; pos++) {
    const spoken = counter[previous][0] - counter[previous][1];
    previous = spoken;
    if (counter[spoken] !== undefined)
      counter[spoken] = [pos, counter[spoken][0]];
    else counter[spoken] = [pos, pos];
  }
  return previous;
};

const part1 = (input) => {
  return spokenValue(input, 2020);
};

const part2 = (input) => {
  return spokenValue(input, 30000000);
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
