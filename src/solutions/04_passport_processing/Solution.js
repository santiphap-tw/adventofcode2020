import input01 from "./case01/input.txt";
import input02 from "./case02/input.txt";
import input03 from "./case03/input.txt";
import output01Part1 from "./case01/output.part1.txt";
import output02Part1 from "./case02/output.part1.txt";
import output03Part1 from "./case03/output.part1.txt";
import output01Part2 from "./case01/output.part2.txt";
import output02Part2 from "./case02/output.part2.txt";
import output03Part2 from "./case03/output.part2.txt";

const isValidPart1 = (passport) => {
  return (
    passport.indexOf("byr:") >= 0 &&
    passport.indexOf("iyr:") >= 0 &&
    passport.indexOf("eyr:") >= 0 &&
    passport.indexOf("hgt:") >= 0 &&
    passport.indexOf("hcl:") >= 0 &&
    passport.indexOf("ecl:") >= 0 &&
    passport.indexOf("pid:") >= 0
  );
};

const isValidPart2 = (passport) => {
  const byr = parseInt(passport["byr"]);
  if (isNaN(byr) || byr < 1920 || byr > 2002) return false;

  const iyr = parseInt(passport["iyr"]);
  if (isNaN(iyr) || iyr < 2010 || iyr > 2020) return false;

  const eyr = parseInt(passport["eyr"]);
  if (isNaN(eyr) || eyr < 2020 || eyr > 2030) return false;

  const hgt = passport["hgt"];
  if (hgt.indexOf("cm") > 0) {
    const value = parseInt(hgt.split("cm")[0]);
    if (isNaN(value) || value < 150 || value > 193) return false;
  } else if (hgt.indexOf("in") > 0) {
    const value = parseInt(hgt.split("in")[0]);
    if (isNaN(value) || value < 59 || value > 76) return false;
  } else {
    return false;
  }

  const hcl = passport["hcl"];
  if (hcl.match(/^#[0-9abcdef]{6}$/) === null) return false;

  const ecl = passport["ecl"];
  if (ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) === null) return false;

  const pid = passport["pid"];
  if (pid.match(/^[0-9]{9}$/) === null) return false;

  return true;
};

const part1 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  let countValid = 0;
  input.forEach((passport) => {
    if (isValidPart1(passport)) countValid++;
  });
  return countValid;
};

const part2 = (input) => {
  input = input.join("\n").split(/\n\s*\n/);
  let countValid = 0;
  input.forEach((passport) => {
    if (isValidPart1(passport)) {
      let passportFields = {};
      passport
        .split(/[\n\s]+/)
        .filter((field) => field.length > 0)
        .forEach((field) => {
          const [name, value] = field.split(":");
          passportFields[name] = value;
        });
      if (isValidPart2(passportFields)) countValid++;
    }
  });
  return countValid;
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
