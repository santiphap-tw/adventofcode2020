import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  let countTree = 0;
  input.forEach((row, index) => {
    row = row.trim();
    if (row.charAt((index * 3) % row.length) === "#") countTree++;
  });
  return countTree;
};

const part2 = (input) => {
  let countTree1 = 0;
  let countTree2 = 0;
  let countTree3 = 0;
  let countTree4 = 0;
  let countTree5 = 0;
  input.forEach((row, index) => {
    row = row.trim();
    if (row.charAt((index * 1) % row.length) === "#") countTree1++;
    if (row.charAt((index * 3) % row.length) === "#") countTree2++;
    if (row.charAt((index * 5) % row.length) === "#") countTree3++;
    if (row.charAt((index * 7) % row.length) === "#") countTree4++;
    if (index % 2 === 0 && row.charAt((index * 0.5) % row.length) === "#")
      countTree5++;
  });
  return countTree1 * countTree2 * countTree3 * countTree4 * countTree5;
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
