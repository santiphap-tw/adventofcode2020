import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import input03 from "./case03/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output03Part1 from "./case03/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";
import output03Part2 from "./case03/output.part2.txt";

const part1 = (input) => {
  let bagList = [];
  input.forEach((bagInfo) => {
    const currentBag = bagInfo.split("bags contain")[0].trim();
    bagInfo
      .split("contain")[1]
      .split(/[0-9.,]+/)
      .join("")
      .split(/bag[s]?/)
      .forEach((bag) => {
        bag = bag.trim();
        if (bag.length > 0) {
          if (!bagList[bag]) bagList[bag] = [];
          bagList[bag].push(currentBag);
        }
      });
  });
  let containedBagList = [];
  if (!bagList["shiny gold"]) return 0;
  let queue = bagList["shiny gold"];
  while (queue.length > 0) {
    const bag = queue.pop();
    if (!containedBagList.find((b) => b === bag)) {
      containedBagList.push(bag);
      if (bagList[bag]) bagList[bag].forEach((b) => queue.push(b));
    }
  }
  return containedBagList.length;
};

const part2 = (input) => {
  let bagList = [];
  input.forEach((bagInfo) => {
    const currentBag = bagInfo.split("bags contain")[0].trim();
    bagInfo
      .split("contain")[1]
      .split(/[.,]+/)
      .join("")
      .split(/bag[s]?/)
      .forEach((bag) => {
        const bagName = bag
          .trim()
          .split(/[0-9]+/)
          .join("")
          .trim();
        const quantity = parseInt(bag.trim().split(" ")[0]);
        if (bagName.length > 0 && bagName !== "no other") {
          if (!bagList[currentBag]) bagList[currentBag] = [];
          bagList[currentBag].push({
            bag: bagName,
            quantity: quantity,
          });
        }
      });
  });
  const countInsideBags = (bagName, bagList) => {
    if (bagList[bagName]) {
      let countBag = 0;
      bagList[bagName].forEach((b) => {
        countBag += b.quantity * countInsideBags(b.bag, bagList);
      });
      return countBag + 1;
    }
    return 1;
  };
  return countInsideBags("shiny gold", bagList) - 1;
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
