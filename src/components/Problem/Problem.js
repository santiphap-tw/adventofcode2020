import React, { useEffect, useState } from "react";
import { Empty, Fail, Pass } from "../Status/Status";
import CustomRunPopup from "../CustomRun/CustomRunModal";

const Problem = (props) => {
  const name = props.name;
  const solution = props.solution;
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [popup, setPopup] = useState(<div />);

  const showCustomRun = async () => {
    const input = await solution.part1.input;
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

  useEffect(() => {
    async function run() {
      setResult1(null);
      setResult2(null);
      const execute = async (prob) => {
        const input = await prob.input;
        const output = await prob.output;
        const fn = prob.solution;
        for (const index in output) {
          if (fn(input[index]).toString() !== output[index]) {
            return false;
          }
        }
        return true;
      };
      const result1 = await execute(solution.part1);
      const result2 = await execute(solution.part2);
      setResult1(result1);
      setResult2(result2);
    }
    run();
  }, [solution]);

  return (
    <tr className="table-bordered border-left-0 border-right-0">
      <td className="align-middle">{name}</td>
      <td className="align-middle">
        {result1 === null && <Empty />}
        {result1 === true && <Pass />}
        {result1 === false && <Fail />}/{result2 === null && <Empty />}
        {result2 === true && <Pass />}
        {result2 === false && <Fail />}
      </td>
      <td className="align-middle">
        <button
          className="btn btn-outline-primary border-0 m-1"
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
