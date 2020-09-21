// External Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { RiMovie2Fill } from "react-icons/ri";

// Internal Dependencies
import "./Crew.scss";

const Crew = ({ crew, handleClick }) => {
  return (
    <React.Fragment>
      <h4 className="crew-title">
        <RiMovie2Fill /> Crew
      </h4>
      <hr />
      {crew.map((crewDetail, index) => (
        <Row key={index}>
          <Col>
            <h3
              className="crew-name"
              onClick={() => handleClick(crewDetail.id)}
            >
              {crewDetail.name}
            </h3>
            <p className="crew-job">{crewDetail.job}</p>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

Crew.propTypes = {
  crew: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
};

export default React.memo(Crew);
