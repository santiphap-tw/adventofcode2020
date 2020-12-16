import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  const fields = input[0].split("\n");
  const yourTicket = input[1].split("\n")[1];
  const otherTickets = input[2].split("\n").slice(1);
  let rules = [];
  fields.forEach((field) => {
    field
      .split(":")[1]
      .trim()
      .split("or")
      .map((rule) => rule.trim())
      .forEach((rule) => {
        const lower = parseInt(rule.split("-")[0]);
        const upper = parseInt(rule.split("-")[1]);
        rules.push([lower, upper]);
      });
  });
  let sum = 0;
  otherTickets
    .join(",")
    .split(",")
    .map((field) => parseInt(field))
    .forEach((field) => {
      let valid = false;
      for (const key in rules) {
        if (field >= rules[key][0] && field <= rules[key][1]) {
          valid = true;
          break;
        }
      }
      if (!valid) sum += field;
    });
  return sum;
};

const part2 = (input) => {
  // Your part 2 solution
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
