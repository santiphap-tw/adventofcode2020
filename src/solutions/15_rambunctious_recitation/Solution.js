import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const bruteForce = (input, target) => {
  let seq = input[0].split(",").map((i) => parseInt(i.trim()));
  let counter = {};
  for (let i = 0; i < target; i++) {
    if (seq[i] !== undefined) {
      counter[seq[i]] = [i];
      continue;
    }
    const previous = seq[i - 1];
    if (counter[previous].length === 1) {
      seq.push(0);
      if (!counter[0]) counter[0] = [i];
      else counter[0] = [i, ...counter[0]];
    } else {
      const spoken = counter[previous][0] - counter[previous][1];
      seq.push(spoken);
      if (!counter[spoken]) counter[spoken] = [i];
      else counter[spoken] = [i, ...counter[spoken]];
    }
  }
  return seq[target - 1];
};

const lastPosition = (input, target) => {
  input = input[0].split(",").map((i) => parseInt(i.trim()));
  let counter = {};
  let pos = 0;
  let previous = 0;
  for (; pos < input.length; pos++) {
    counter[input[pos]] = [pos];
    previous = input[pos];
  }
  for (; pos < target; pos++) {
    if (pos % 100000 === 0) console.log((pos / target) * 100 + "%");
    if (counter[previous].length === 1) {
      previous = 0;
      if (!counter[0]) counter[0] = [pos];
      else counter[0] = [pos, counter[0][0]];
    } else {
      const spoken = counter[previous][0] - counter[previous][1];
      previous = spoken;
      if (!counter[spoken]) counter[spoken] = [pos];
      else counter[spoken] = [pos, counter[spoken][0]];
    }
  }
  return previous;
};

const part1 = (input) => {
  return lastPosition(input, 2020);
};

const part2 = (input) => {
  return lastPosition(input, 30000000);
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
