import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";
import input03 from "./case03/input.txt";
import output03Part1 from "./case03/output.part1.txt";
import output03Part2 from "./case03/output.part2.txt";

const part1 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  const fields = input[0].split("\n");
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
  input = input.join("\n").split(/\n\s*\n/);
  const fields = input[0].split("\n");
  const yourTicket = input[1].split("\n")[1];
  const otherTickets = input[2].split("\n").slice(1);
  // Get Rules
  let rules = [];
  fields.forEach((field) => {
    let fieldRules = [];
    field
      .split(":")[1]
      .trim()
      .split("or")
      .map((rule) => rule.trim())
      .forEach((rule) => {
        const lower = parseInt(rule.split("-")[0]);
        const upper = parseInt(rule.split("-")[1]);
        fieldRules.push([lower, upper]);
      });
    rules.push(fieldRules);
  });
  // Filter only Valid tickets
  let validTickets = [];
  otherTickets.forEach((ticket) => {
    let valid = true;
    const ticketSplit = ticket.split(",").map((field) => parseInt(field));
    for (const f in ticketSplit) {
      let validField = false;
      for (const key in rules) {
        if (
          (ticketSplit[f] >= rules[key][0][0] &&
            ticketSplit[f] <= rules[key][0][1]) ||
          (ticketSplit[f] >= rules[key][1][0] &&
            ticketSplit[f] <= rules[key][1][1])
        ) {
          validField = true;
          break;
        }
      }
      if (!validField) {
        valid = false;
        break;
      }
    }
    if (valid) validTickets.push(ticket);
  });
  // Get Possible fields for each position
  let possibleFieldOrder = [];
  for (let pos = 0; pos < rules.length; pos++) {
    let possibleRules = [];
    for (let i = 0; i < rules.length; i++) {
      possibleRules[i] = i;
    }
    validTickets.forEach((ticket) => {
      const ticketSplit = ticket.split(",").map((field) => parseInt(field));
      const value = ticketSplit[pos];
      for (let i = 0; i < rules.length; i++) {
        if (
          (value < rules[i][0][0] || value > rules[i][0][1]) &&
          (value < rules[i][1][0] || value > rules[i][1][1])
        ) {
          possibleRules = possibleRules.filter((rule) => rule !== i);
        }
      }
    });
    possibleFieldOrder.push(possibleRules);
  }
  // Figure out field order
  let gotAnswer = false;
  let fieldOrder = [];
  while (!gotAnswer) {
    const countPossible = possibleFieldOrder.map((rules) => rules.length);
    const pos = countPossible.indexOf(1);
    if (pos === -1) return "n/a";
    fieldOrder[pos] = possibleFieldOrder[pos][0];
    possibleFieldOrder = possibleFieldOrder.map((rules) =>
      rules.filter((rule) => rule !== fieldOrder[pos])
    );
    const possibleLeft = possibleFieldOrder
      .map((rules) => rules.length)
      .reduce((a, b) => a + b, 0);
    gotAnswer = possibleLeft === 0;
  }
  // Multiply departure fields
  let result = 1;
  yourTicket
    .split(",")
    .map((field) => parseInt(field))
    .forEach((value, index) => {
      if (fields[fieldOrder[index]].includes("departure")) result *= value;
    });
  return fieldOrder.join(",") + " " + result;
};

const Solution = {
  part1: {
    solution: part1,
    input: [input01, input02, input03],
    output: [output01Part1, output02Part1, output03Part1],
  },
  part2: {
    solution: part2,
    input: [input01, input02, input03],
    output: [output01Part2, output02Part2, output03Part2],
  },
};

export default Solution;
