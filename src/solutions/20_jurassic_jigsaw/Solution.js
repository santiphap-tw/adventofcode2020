import input01 from "./case01/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import input02 from "./case02/input.txt";
import output02Part1 from "./case02/output.part1.txt";
import output02Part2 from "./case02/output.part2.txt";

const checkBorder = (border, tiles) => {
  for (let tilesKey = 0; tilesKey < tiles.length; tilesKey++) {
    const tile = tiles[tilesKey];
    if (
      tile.border.up === border ||
      tile.border.up === border.split("").reverse().join("")
    )
      return true;
    if (
      tile.border.down === border ||
      tile.border.down === border.split("").reverse().join("")
    )
      return true;
    if (
      tile.border.left === border ||
      tile.border.left === border.split("").reverse().join("")
    )
      return true;
    if (
      tile.border.right === border ||
      tile.border.right === border.split("").reverse().join("")
    )
      return true;
  }
  return false;
};

const part1 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  let tiles = [];
  input.forEach((tile) => {
    const tileId = parseInt(tile.split("\n")[0].split(":")[0].split(" ")[1]);
    const tileInfo = tile
      .split("\n")
      .slice(1)
      .map((row) => row.split("").filter((t) => t.trim().length > 0));
    let border = {
      up: "",
      down: "",
      left: "",
      right: "",
    };
    for (let i = 0; i < 10; i++) {
      border.up += tileInfo[0][i];
      border.down += tileInfo[9][i];
      border.left += tileInfo[i][0];
      border.right += tileInfo[i][9];
    }
    tiles.push({
      id: tileId,
      border: border,
    });
  });
  let result = 1;
  tiles.forEach((tile) => {
    let countNeighbours = 0;
    Object.entries(tile.border).forEach(([direction, border]) => {
      if (
        checkBorder(
          border,
          tiles.filter((t) => t.id !== tile.id)
        )
      )
        countNeighbours++;
    });
    if (countNeighbours === 2) result *= tile.id;
  });
  return result;
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
