import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  let pos = { x: 0, y: 0 };
  let direction = 0;
  let forward = (n) => {
    switch (direction) {
      case 0:
        pos.x += n;
        break;
      case 90:
        pos.y += n;
        break;
      case 180:
        pos.x -= n;
        break;
      case 270:
        pos.y -= n;
        break;
      default:
        break;
    }
  };
  input.forEach((cmd) => {
    const action = cmd.charAt(0);
    const value = parseInt(cmd.substring(1));
    if (action === "F") forward(value);
    if (action === "E") pos.x += value;
    if (action === "S") pos.y -= value;
    if (action === "W") pos.x -= value;
    if (action === "N") pos.y += value;
    if (action === "L") direction = (direction + value) % 360;
    if (action === "R") direction = (direction - value + 360) % 360;
  });
  return Math.abs(pos.x) + Math.abs(pos.y);
};

const part2 = (input) => {
  let shipPos = { x: 0, y: 0 };
  let wayPointPos = { x: 10, y: 1 };
  let forward = (n) => {
    shipPos.x += wayPointPos.x * n;
    shipPos.y += wayPointPos.y * n;
  };
  input.forEach((cmd) => {
    const action = cmd.charAt(0);
    const value = parseInt(cmd.substring(1));
    if (action === "F") forward(value);
    if (action === "E") wayPointPos.x += value;
    if (action === "S") wayPointPos.y -= value;
    if (action === "W") wayPointPos.x -= value;
    if (action === "N") wayPointPos.y += value;
    if (action === "L") {
      if (value === 180) {
        const newWayPoint = { x: -wayPointPos.x, y: -wayPointPos.y };
        wayPointPos = newWayPoint;
      }
      if (value === 270) {
        const newWayPoint = { x: wayPointPos.y, y: -wayPointPos.x };
        wayPointPos = newWayPoint;
      }
      if (value === 90) {
        const newWayPoint = { x: -wayPointPos.y, y: wayPointPos.x };
        wayPointPos = newWayPoint;
      }
    }
    if (action === "R") {
      if (value === 180) {
        const newWayPoint = { x: -wayPointPos.x, y: -wayPointPos.y };
        wayPointPos = newWayPoint;
      }
      if (value === 90) {
        const newWayPoint = { x: wayPointPos.y, y: -wayPointPos.x };
        wayPointPos = newWayPoint;
      }
      if (value === 270) {
        const newWayPoint = { x: -wayPointPos.y, y: wayPointPos.x };
        wayPointPos = newWayPoint;
      }
    }
  });
  return Math.abs(shipPos.x) + Math.abs(shipPos.y);
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
