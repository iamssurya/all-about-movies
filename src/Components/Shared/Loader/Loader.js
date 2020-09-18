import React from "react";
import { Spinner } from "react-bootstrap";

import "./Loader.scss";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <div className="align-self-center">
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Loader);
