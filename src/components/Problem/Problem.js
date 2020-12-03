import React from "react";

export default (props) => {
  const name = props.name;
  return (
    <div className="col-12 col-lg-3 col-md-6">
      <div className="card m-1">
        <div className="card-header">{name}</div>
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
