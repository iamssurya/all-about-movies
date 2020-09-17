import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const Crew = ({ crew }) => {
  return (
    <React.Fragment>
      <h6> Crew</h6>
      <hr />
      {crew.map((crewDetail) => (
        <Row>
          <Col>
            <h3>{crewDetail.name}</h3>
            <p>{crewDetail.job}</p>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

Crew.propTypes = {
  crew: PropTypes.array.isRequired,
};

export default Crew;
