import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  const preamble = input.length <= 25 ? 5 : 25;
  input = input.map((i) => parseInt(i));
  for (const i in input) {
    if (i >= preamble) {
      let valid = false;
      input.slice(i - preamble, i).forEach((a) => {
        if (
          input
            .slice(i - preamble, i)
            .map((b) => a + b)
            .find((v) => v === input[i])
        )
          valid = true;
      });
      if (!valid) return input[i];
    }
  }
  return 0;
};

const part2 = (input) => {
  input = input.map((i) => parseInt(i));
  const invalidNumber = part1(input);
  const upperLimit = input.indexOf(invalidNumber);
  let sumArray = [0];
  for (let i = 0; i < upperLimit; i++) {
    sumArray[i + 1] = sumArray[i] + input[i];
  }
  let left = 0;
  let right = 1;
  while (sumArray[right] - sumArray[left] !== invalidNumber) {
    if (sumArray[right] - sumArray[left] < invalidNumber) right++;
    else left++;
  }
  const member = input.slice(left, right);
  return Math.max(...member) + Math.min(...member);
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
