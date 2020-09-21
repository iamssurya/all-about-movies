// External Dependencies
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { TiGroup } from "react-icons/ti";
import { Col, Container, Row } from "react-bootstrap";

// Internal Dependencies
import { PersonCard, DataNotFound } from "components/Shared";
import Crew from "components/Crew/Crew";

import "./CastAndCrew.scss";

const CastAndCrew = ({ cast, crew, history }) => {
  const navigateToDetail = (id) => {
    history.push("/person/" + id);
  };

  if (!cast.length) {
    return <DataNotFound />;
  }

  return (
    <React.Fragment>
      <Container fluid className="cast-and-crew">
        <Row className="mt-3">
          <Col xs={9}>
            <h4 className="cast-title">
              <TiGroup /> Cast
            </h4>
            <Row>
              {cast.map((person, index) => (
                <Col
                  key={index}
                  xs={12}
                  md={2}
                  sm={4}
                  onClick={() => navigateToDetail(person.id)}
                >
                  <PersonCard {...person} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Crew crew={crew} handleClick={(id) => navigateToDetail(id)} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

CastAndCrew.propTypes = {
  cast: PropTypes.array.isRequired,
  crew: PropTypes.array.isRequired,
};

export default React.memo(withRouter(CastAndCrew));
