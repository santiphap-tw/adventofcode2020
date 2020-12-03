import React from "react";
import Problem from "../../components/Problem/Problem";
import ProblemList from "../../data/ProblemList";

const Home = () => {
  const problemList = ProblemList;
  return (
    <div>
      <div className="container p-0 text-center">
        <p className="h1 bg-dark p-5">Advent of Code 2020</p>
        <table className="table table-hover table-borderless">
          <thead>
            <tr className="table-bordered">
              <th className="text-center">Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {problemList.map((problem) => (
              <Problem
                key={problem.name}
                name={problem.name}
                solution={problem.solution}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
