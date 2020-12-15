import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";
import input03 from "./case03/input.txt";
import output03Part1 from "./case03/output.part1.txt";
import output03Part2 from "./case03/output.part2.txt";

const getCommand = (cmd) => {
  const rawValue = cmd.split("=")[1].trim();
  let value = "";
  if (rawValue.length < 36) {
    value = (
      "000000000000000000000000000000000000" +
      parseInt(cmd.split("=")[1].trim()).toString(2)
    ).slice(-36);
  } else {
    value = rawValue;
  }
  const action = cmd.split("=")[0].split("[")[0].trim();
  if (action === "mask") return [action, "", value];
  const target = cmd.split("=")[0].split("[")[1].split("]")[0].trim();
  return [action, target, value];
};

const part1 = (input) => {
  let mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  let mem = {};
  const maskValue = (value, mask) => {
    let result = "";
    for (let i = 0; i < 36; i++) {
      if (mask.charAt(i) === "X") result += value.charAt(i);
      else result += mask.charAt(i);
    }
    return result;
  };
  input.forEach((cmd) => {
    const [action, target, value] = getCommand(cmd);
    if (action === "mask") mask = value;
    if (action === "mem") {
      mem[target] = parseInt(maskValue(value, mask), 2);
    }
  });
  let sum = 0;
  Object.entries(mem).forEach(([location, value]) => {
    sum += value;
  });
  return sum;
};

const part2 = (input) => {
  let mask = "000000000000000000000000000000000000";
  let mem = {};
  const maskTarget = (target, mask) => {
    const targetBinary = (
      "000000000000000000000000000000000000" + parseInt(target).toString(2)
    ).slice(-36);
    let result = "";
    for (let i = 0; i < 36; i++) {
      if (mask.charAt(i) === "0") result += targetBinary.charAt(i);
      else result += mask.charAt(i);
    }
    return result;
  };
  const writeMem = (target, value) => {
    if (target.indexOf("X") !== -1) {
      writeMem(target.replace("X", "0"), value);
      writeMem(target.replace("X", "1"), value);
    } else {
      mem[parseInt(target, 2)] = parseInt(value, 2);
    }
  };
  for (const i in input) {
    const cmd = input[i];
    const [action, target, value] = getCommand(cmd);
    if (action === "mask") mask = value;
    if (action === "mem") {
      if (mask.split("X").length > 10) return "Too big!";
      writeMem(maskTarget(target, mask), value);
    }
  }
  let sum = 0;
  Object.entries(mem).forEach(([location, value]) => {
    sum += value;
  });
  return sum;
};

const Solution = {
  part1: {
    solution: part1,
    input: [input01, input02, input03],
    output: [output01Part1, output02Part1, output03Part1],
  },
  part2: {
    solution: part2,
    input: [input02, input03],
    output: [output02Part2, output03Part2],
  },
};

export default Solution;
