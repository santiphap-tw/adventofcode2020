import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const gcd = (a, b, s = [0, 1], t = [1, 0]) => {
  if (b > a) {
    const [g, s, t] = gcd(b, a);
    return [g, t, s];
  }
  const newS = s[1] - Math.floor(a / b) * s[0];
  const newT = t[1] - Math.floor(a / b) * t[0];
  if (a % b === 0) return [b, s[0], t[0]];
  else return gcd(b, a % b, [newS, ...s], [newT, ...t]);
};

const firstOccur = (p1, offset1, p2, offset2) => {
  //if (p1 > p2) return firstOccur(p2, offset2, p1, offset1);
  const [g, s, t] = gcd(p1, p2);
  const lcm = (p1 * p2) / g;
  if (offset2 === 0) return lcm;
  const result = (p1 * s * (offset1 - offset2 / g)) % lcm;
  return [result > 0 ? result : result + lcm, lcm];
};

const part1 = (input) => {
  const expectedTime = parseInt(input[0]);
  const busInfo = input[1]
    .split(",")
    .map((i) => parseInt(i))
    .filter((i) => !isNaN(i));
  const actualTime = busInfo.map((t) => Math.ceil(expectedTime / t) * t);
  const targetBus = busInfo[actualTime.indexOf(Math.min(...actualTime))];
  return targetBus * (Math.min(...actualTime) - expectedTime);
};

const part2 = (input) => {
  const busInfo = input[1]
    .split(",")
    .map((value, index) => [parseInt(value), index])
    .filter((value) => !isNaN(value[0]));
  let prev = [...busInfo[0]];
  for (let i = 1; i < busInfo.length; i++) {
    const reduce = firstOccur(prev[0], prev[1], busInfo[i][0], busInfo[i][1]);
    prev = [reduce[1], -reduce[0] + prev[1]];
  }
  return -prev[1];
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
