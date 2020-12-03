import React from "react";
import { Empty, Fail, Pass } from "../Status/Status";

export default (props) => {
  const name = props.name;
  return (
    <div className="col-12 col-lg-3 col-md-6">
      <div className="card m-1">
        <div className="card-header">
          <p className="fw-bolder">{name}</p>
          <div className="mt-3 d-flex justify-content-around">
            <Empty />
            <Empty />
          </div>
        </div>
        <div className="card-body">
          <a href="#" className="btn btn-primary m-1">
            Run
          </a>
          <a href="#" className="btn btn-primary m-1">
            Custom Run
          </a>
        </div>
      </div>
    </div>
  );
};
