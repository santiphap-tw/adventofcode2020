import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const part1 = (input) => {
  let activeCubes = [];
  const isActive = (cube) => {
    return !!activeCubes.find(
      (c) => c.x === cube.x && c.y === cube.y && c.z === cube.z
    );
  };
  const getNeighbours = (cube) => {
    let neighbours = [];
    for (let i = cube.x - 1; i <= cube.x + 1; i++) {
      for (let j = cube.y - 1; j <= cube.y + 1; j++) {
        for (let k = cube.z - 1; k <= cube.z + 1; k++) {
          if (i === cube.x && j === cube.y && k === cube.z) continue;
          neighbours.push({ x: i, y: j, z: k });
        }
      }
    }
    return neighbours;
  };
  input.forEach((row, y) => {
    row.split("").forEach((value, x) => {
      if (value === "#") activeCubes.push({ x: x + 1, y: y + 1, z: 0 });
    });
  });
  for (let i = 0; i < 6; i++) {
    let nextStateActiveCubes = [];
    let currentNeighborNonActiveCubes = [];
    activeCubes.forEach((cube) => {
      const countActiveNeighbours = getNeighbours(cube).filter((c) =>
        isActive(c)
      ).length;
      if (countActiveNeighbours === 2 || countActiveNeighbours === 3)
        nextStateActiveCubes.push(cube);
      currentNeighborNonActiveCubes.push(
        ...getNeighbours(cube).filter(
          (c) =>
            !isActive(c) &&
            !currentNeighborNonActiveCubes.find(
              (ca) => ca.x === c.x && ca.y === c.y && ca.z === c.z
            )
        )
      );
    });
    currentNeighborNonActiveCubes.forEach((cube) => {
      const countActiveNeighbours = getNeighbours(cube).filter((c) =>
        isActive(c)
      ).length;
      if (countActiveNeighbours === 3) nextStateActiveCubes.push(cube);
    });
    activeCubes = nextStateActiveCubes;
  }
  return activeCubes.length;
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
