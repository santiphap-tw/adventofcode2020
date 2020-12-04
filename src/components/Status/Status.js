import { Tooltip } from "bootstrap";
import { useEffect } from "react";

export const Pass = (props) => {
  const message = props.message;
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <i
      className="material-icons-round align-middle text-primary mx-auto"
      data-toggle="tooltip"
      data-placement="top"
      title={message}
    >
      mood
    </i>
  );
};
export const Fail = (props) => {
  const message = props.message;
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <i
      className="material-icons-round align-middle text-danger mx-auto"
      data-toggle="tooltip"
      data-placement="top"
      title={message}
    >
      mood_bad
    </i>
  );
};
export const Empty = (props) => {
  const message = props.message;
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <i
      className="material-icons-outlined align-middle text-muted mx-auto"
      data-toggle="tooltip"
      data-placement="top"
      title={message}
    >
      lens
    </i>
  );
};
