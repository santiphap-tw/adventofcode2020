import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const evalStack = (stack) => {
  let numberStack = [];
  stack.forEach((value) => {
    if (value === "+") {
      const a = numberStack.pop();
      const b = numberStack.pop();
      numberStack.push(a + b);
    } else if (value === "*") {
      const a = numberStack.pop();
      const b = numberStack.pop();
      numberStack.push(a * b);
    } else {
      numberStack.push(parseInt(value));
    }
  });
  return numberStack.pop();
};

const evalExp = (exp, priority) => {
  exp = exp.split("").filter((value) => value.trim().length > 0);
  let numberStack = [];
  let operatorStack = [];
  exp.forEach((value) => {
    if (value === "+" || value === "*") {
      let top = operatorStack.pop();
      while (top) {
        if (priority[top] < priority[value]) {
          operatorStack.push(top);
          break;
        }
        numberStack.push(top);
        top = operatorStack.pop();
      }
      operatorStack.push(value);
    } else if (value === "(") {
      operatorStack.push(value);
    } else if (value === ")") {
      let top = operatorStack.pop();
      while (top !== "(") {
        numberStack.push(top);
        top = operatorStack.pop();
      }
    } else {
      numberStack.push(value);
    }
  });
  numberStack.push(...operatorStack.reverse());
  return numberStack;
};

const part1 = (input) => {
  let answers = [];
  const priority = {
    "(": 0,
    "*": 1,
    "+": 1,
  };
  input.forEach((exp) => {
    const stack = evalExp(exp, priority);
    answers.push(evalStack(stack));
  });
  return answers.reduce((a, b) => a + b, 0);
};

const part2 = (input) => {
  let answers = [];
  const priority = {
    "(": 0,
    "*": 1,
    "+": 2,
  };
  input.forEach((exp) => {
    const stack = evalExp(exp, priority);
    answers.push(evalStack(stack));
  });
  return answers.reduce((a, b) => a + b, 0);
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
