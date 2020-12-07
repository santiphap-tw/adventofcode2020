import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  let countYes = 0;
  input.forEach((answers) => {
    let yesList = [];
    answers.split("").forEach((answer) => {
      if (answer.trim().length > 0) yesList[answer.trim()] = 1;
    });
    countYes += Object.entries(yesList).length;
  });
  return countYes;
};

const part2 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  let countYes = 0;
  input.forEach((answers) => {
    let yesList = [];
    const people = answers.split("\n").length;
    answers.split("").forEach((answer) => {
      if (answer.trim().length > 0) {
        if (yesList[answer.trim()]) yesList[answer.trim()]++;
        else yesList[answer.trim()] = 1;
      }
    });
    countYes += Object.entries(yesList).filter((answer) => answer[1] === people)
      .length;
  });
  return countYes;
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
