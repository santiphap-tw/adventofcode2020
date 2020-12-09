# Advent of Code 2020

This project was created to help implementing [Advent of Code](https://adventofcode.com/) with Javascript. See the project [here](https://adventofcode2020.shumiq.now.sh/).

## How to add a new problem

You can incrementally add a new problem by

- Copy `./src/solutions/00_template` to `./src/solutions/new_problem`
- Configure your input/output for validating, you are free to add more case by creating new files/folders and import them in `./src/solutions/new_problem/Solution.js`
- Implement your solution in `part1` and `part2` function in `./src/solutions/new_problem/Solution.js`
- Add your problem to `data/ProblemList.js`

## Author

Santiphap Watcharasukchit