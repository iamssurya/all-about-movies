import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const Crew = ({ crew }) => {
  return (
    <React.Fragment>
      <h6 className="crew-title">Crew</h6>
      <hr />
      {crew.map((crewDetail, index) => (
        <Row key={index}>
          <Col>
            <h3 className="crew-name">{crewDetail.name}</h3>
            <p className="crew-job">{crewDetail.job}</p>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

Crew.propTypes = {
  crew: PropTypes.array.isRequired,
};

export default React.memo(Crew);
