import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./CustomRunModal.css";

const CustomRunPopup = (props) => {
  const onClose = props.onClose;
  const [modal, setModal] = useState();
  useEffect(() => {
    const popupElement = document.querySelector(".modal");
    if (popupElement) {
      setModal(new Modal(popupElement));
    }
  }, []);
  useEffect(() => {
    if (modal)
      if (props.show) modal.show();
      else modal.hide();
  }, [modal, props.show]);
  useEffect(() => {
    const popupElement = document.querySelector(".modal");
    if (popupElement !== null) {
      popupElement.addEventListener("hidden.bs.modal", onClose);
    }
  }, [onClose]);
  ////////
  const sampleInputs = props.data.input;
  const solution = props.data.solution;
  const [output1, setOutput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [input, setInput] = useState("");
  const run = () => {
    let result1 = "Invalid Input";
    let result2 = "Invalid Input";
    try {
      result1 = solution.part1(input.split("\n"));
    } catch (e) {}
    try {
      result2 = solution.part2(input.split("\n"));
    } catch (e) {}
    setOutput1(result1);
    setOutput2(result2);
  };
  return (
    <div className="modal fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Custom Run</h5>
          </div>
          <div className="modal-body text-center">
            <div className="d-flex justify-content-center">
              {sampleInputs.map((sampleInput, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-outline-primary border-0 m-1"
                  onClick={() => setInput(sampleInput.join("\n"))}
                >
                  Input {index + 1}
                </button>
              ))}
              <button
                type="button"
                className="btn btn-outline-primary border-0 m-1"
                onClick={() => setInput("")}
              >
                Clear
              </button>
            </div>
            <div className="input-group w-100 my-1">
              <span className="input-group-text">Input</span>
              <textarea
                className="form-control bg-light"
                aria-label="Input"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                rows="5"
              />
            </div>
            <div className="input-group w-100 my-1">
              <span className="input-group-text">Output Part 1</span>
              <textarea
                className="form-control bg-light"
                aria-label="Output Part 1"
                disabled
                value={output1}
                rows="1"
              />
            </div>
            <div className="input-group w-100 my-1">
              <span className="input-group-text">Output Part 2</span>
              <textarea
                className="form-control bg-light"
                aria-label="Output Part 2"
                disabled
                value={output2}
                rows="1"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={run}>
              Run
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomRunPopup;
