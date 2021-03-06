import React, { useState, useCallback } from "react";
import { Empty, Fail, Pass } from "../Status/Status";
import CustomRunPopup from "../CustomRun/CustomRunModal";
import {
  ReadFilesToArray,
  ReadFilesToText,
} from "../../utils/io/ReadFileToText";

const Problem = (props) => {
  const name = props.name;
  const solution = props.solution;
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [popup, setPopup] = useState(<div />);

  const showCustomRun = async () => {
    const input = await ReadFilesToArray(solution.part1.input);
    setPopup(
      <CustomRunPopup
        show={true}
        onClose={() => setPopup(<div />)}
        data={{
          input: input,
          solution: {
            part1: solution.part1.solution,
            part2: solution.part2.solution,
          },
        }}
      />
    );
  };

  const run = useCallback(() => {
    setResult1(null);
    setResult2(null);
    const execute = async (prob) => {
      const input = await ReadFilesToArray(prob.input);
      const output = await ReadFilesToText(prob.output);
      let result = [];
      const fn = prob.solution;
      for (const index in output) {
        if (output[index].trim() === "") {
          result.push(
            <Empty
              key={prob.output + index}
              message={"result: " + fn(input[index]).toString()}
            />
          );
        } else if (fn(input[index]).toString() === output[index]) {
          result.push(
            <Pass
              key={prob.output + index}
              message={"result: " + output[index]}
            />
          );
        } else
          result.push(
            <Fail
              key={prob.output + index}
              message={
                "expected: " +
                output[index] +
                " | got: " +
                fn(input[index]).toString()
              }
            />
          );
      }
      return result;
    };
    execute(solution.part1).then((result) => setResult1(result));
    execute(solution.part2).then((result) => setResult2(result));
  }, [solution]);

  return (
    <tr className="table-bordered border-left-0 border-right-0">
      <td className="align-middle">{name}</td>
      <td className="align-middle">
        {result1}
        {result1 !== null && "/"}
        {result2}
      </td>
      <td className="align-middle">
        <button className="btn btn-outline-success border-0 m-1" onClick={run}>
          <i className="material-icons-round align-middle mx-auto">
            playlist_play
          </i>
        </button>
        <button
          className="btn btn-outline-success border-0 m-1"
          onClick={showCustomRun}
        >
          <i className="material-icons-round align-middle mx-auto">
            play_circle_filled
          </i>
        </button>
        {popup}
      </td>
    </tr>
  );
};

export default Problem;
