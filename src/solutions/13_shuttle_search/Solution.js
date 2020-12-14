/* global BigInt */
import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

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
  const gcd = (
    a,
    b,
    s = [BigInt(0), BigInt(1)],
    t = [BigInt(1), BigInt(0)]
  ) => {
    if (b > a) {
      const [g, s, t] = gcd(b, a);
      return [g, t, s];
    }
    const newS = s[1] - (a / b) * s[0];
    const newT = t[1] - (a / b) * t[0];
    if (BigInt(a % b) === BigInt(0)) return [b, s[0], t[0]];
    else return gcd(b, a % b, [newS, ...s], [newT, ...t]);
  };
  const firstOccur = (p1, offset1, p2, offset2) => {
    const [g, s, t] = gcd(p1, p2);
    const lcm = (p1 * p2) / g;
    if (offset2 === BigInt(0)) return lcm;
    const range = BigInt(BigInt(offset1) - BigInt(offset2));
    const result = (p1 * s * BigInt(range / BigInt(g))) % lcm;
    return [result > BigInt(0) ? result : result + lcm, lcm];
  };
  const busInfo = input[1]
    .split(",")
    .map((value, index) => [parseInt(value), index])
    .filter((value) => !isNaN(value[0]))
    .map((value) => [BigInt(value[0]), value[1]]);
  let prev = [...busInfo[0]];
  for (let i = 1; i < busInfo.length; i++) {
    const reduce = firstOccur(prev[0], prev[1], busInfo[i][0], busInfo[i][1]);
    prev = [BigInt(reduce[1]), BigInt(-reduce[0]) + BigInt(prev[1])];
  }
  return (-prev[1]).toString();
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
