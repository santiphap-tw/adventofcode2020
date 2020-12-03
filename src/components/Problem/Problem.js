import React, { useState } from "react";
import { Empty, Fail, Pass } from "../Status/Status";

const Problem = (props) => {
  const name = props.name;
  const solution = props.solution;
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);

  const run = async () => {
    const execute = async (prob) => {
      const input = await prob.input;
      const output = await prob.output;
      const fn = prob.solution;
      for (const index in output) {
        if (fn(input[index]) !== output[index]) {
          return false;
        }
      }
      return true;
    };
    const result1 = await execute(solution.part1);
    const result2 = await execute(solution.part2);
    setResult1(result1);
    setResult2(result2);
  };

  run();

  return (
    <div className="col-12 col-lg-3 col-md-6">
      <div className="card m-1">
        <p className="card-header">
          <p className="fw-bolder d-inline">{name}</p>
          <p className="mx-1 d-inline">
            {result1 === null && <Empty />}
            {result1 === true && <Pass />}
            {result1 === false && <Fail />}/{result2 === null && <Empty />}
            {result2 === true && <Pass />}
            {result2 === false && <Fail />}
          </p>
        </p>
        <div className="card-body">
          <button className="btn btn-primary m-1" onClick={run}>
            Run
          </button>
          <button className="btn btn-primary m-1">Custom Run</button>
        </div>
      </div>
    </div>
  );
};

export default Problem;
