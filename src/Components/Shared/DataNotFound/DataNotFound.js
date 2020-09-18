import React from "react";
import { Jumbotron } from "react-bootstrap";

import "./DataNotFound.scss";

const DataNotFound = () => {
  return (
    <Jumbotron className="mt-3 bg-dark text-white">
      <h1>Oops!</h1>
      <p>The information you have requested is not found!</p>
    </Jumbotron>
  );
};

export default React.memo(DataNotFound);
