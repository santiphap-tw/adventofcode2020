import React from "react";
import Problem from "../../components/Problem/Problem";
import ProblemList from "../../data/ProblemList";

export default () => {
  const problemList = ProblemList;
  return (
    <div>
      <div className="container p-0 text-center">
        <p className="h1 bg-light p-5">Advent of Code 2020</p>
        <div className="row m-0">
          {problemList.map((problem) => (
            <Problem name={problem.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
