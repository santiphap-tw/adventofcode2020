import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const popOperator = (operatorStack) => {
  const lastOpenParen = operatorStack.lastIndexOf("(");
  return [
    operatorStack.slice(0, lastOpenParen),
    operatorStack.slice(lastOpenParen + 1),
  ];
};

const evalExp = (stack) => {
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

const part1 = (input) => {
  let answers = [];
  input.forEach((exp) => {
    exp = exp.split("").filter((value) => value.trim().length > 0);
    let numberStack = [];
    let operatorStack = [];
    exp.forEach((value) => {
      if (value === "+" || value === "*") {
        if (operatorStack.length > 0) {
          if (operatorStack.lastIndexOf("(") !== -1) {
            let popStack;
            [operatorStack, popStack] = popOperator(operatorStack);
            operatorStack.push("(");
            numberStack.push(...popStack);
          } else {
            numberStack.push(...operatorStack);
            operatorStack = [];
          }
        }
        operatorStack.push(value);
      } else if (value === "(") {
        operatorStack.push(value);
      } else if (value === ")") {
        let popStack;
        [operatorStack, popStack] = popOperator(operatorStack);
        numberStack.push(...popStack);
      } else {
        numberStack.push(value);
      }
    });
    numberStack.push(...operatorStack);
    answers.push(evalExp(numberStack));
    // console.log(numberStack)
    // console.log(evalExp(numberStack))
  });
  // Your part 1 solution
  return answers.reduce((a, b) => a + b, 0);
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
