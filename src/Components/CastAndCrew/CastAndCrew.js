import React from "react";
import PropTypes from "prop-types";
import { PersonCard } from "components/Shared";
import { Col, Container, Row } from "react-bootstrap";
import Crew from "components/Crew/Crew";

const CastAndCrew = ({ cast, crew }) => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="mt-3">
          <Col xs={9}>
            <h6>Cast</h6>
            <Row>
              {cast.map((person) => (
                <PersonCard {...person} key={person.id} />
              ))}
            </Row>
          </Col>
          <Col>
            <Crew crew={crew} />
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

export default CastAndCrew;
