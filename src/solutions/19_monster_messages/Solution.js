import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";
import input03 from "./case03/input.txt";
import output03Part1 from "./case03/output.part1.txt";
import output03Part2 from "./case03/output.part2.txt";
import input04 from "./case04/input.txt";
import output04Part1 from "./case04/output.part1.txt";
import output04Part2 from "./case04/output.part2.txt";
import input05 from "./case05/input.txt";
import output05Part1 from "./case05/output.part1.txt";
import output05Part2 from "./case05/output.part2.txt";

const validate = (message, rule, ruleSet) => {
  if (rule.next.length === 0 && rule.after.next)
    return validate(message, rule.after, ruleSet);
  if (message.length === 0 && rule.next.length === 0) return true;
  if (message.length === 0 || rule.next.length === 0) return false;
  let valid = false;
  for (let index = 0; index < rule.next.length; index++) {
    const path = rule.next[index];
    if (path.condition === message.charAt(0)) {
      const newRule = {
        ...path.destination,
        after: rule.after,
      };
      if (validate(message.slice(1), newRule, ruleSet)) {
        return true;
      }
    } else {
      if (!ruleSet[path.condition]) return false;
      const newRule = {
        ...ruleSet[path.condition],
        after: { ...path.destination, after: rule.after },
      };
      if (validate(message, newRule, ruleSet)) {
        return true;
      }
    }
  }
  return valid;
};

const part1 = (input) => {
  const rulesInput = input
    .join("\n")
    .split(/\n\s*\n/)[0]
    .split("\n");
  let rules = [];
  const messages = input
    .join("\n")
    .split(/\n\s*\n/)[1]
    .split("\n")
    .map((message) => message.trim())
    .filter((message) => message.length > 0);
  rulesInput.forEach((rule) => {
    const start = { next: [], after: {} };
    const index = rule.split(":")[0].trim();
    const paths = rule.split(":")[1].trim();
    paths.split("|").forEach((path) => {
      if (path.indexOf('"') !== -1) {
        const cond = path.split('"')[1];
        start.next.push({
          condition: cond,
          destination: { next: [], after: {} },
        });
      } else {
        let currentStop = start;
        path
          .split(" ")
          .filter((stop) => stop.trim().length > 0)
          .forEach((stop) => {
            let nextStop = { next: [], after: {} };
            currentStop.next.push({
              condition: parseInt(stop.toString().trim()),
              destination: nextStop,
            });
            currentStop = nextStop;
          });
      }
    });
    rules[index] = { ...start, after: {} };
  });
  let countValid = 0;
  messages.forEach((message) => {
    if (validate(message, rules[0], rules)) countValid++;
  });
  return countValid;
};

const part2 = (input) => {
  return part1(input);
};

const Solution = {
  part1: {
    solution: part1,
    input: [input01, input02, input03, input04, input05],
    output: [
      output01Part1,
      output02Part1,
      output03Part1,
      output04Part1,
      output05Part1,
    ],
  },
  part2: {
    solution: part2,
    input: [input01, input02, input03, input04, input05],
    output: [
      output01Part2,
      output02Part2,
      output03Part2,
      output04Part2,
      output05Part2,
    ],
  },
};

export default Solution;
