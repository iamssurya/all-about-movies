import React from "react";
import PropTypes from "prop-types";
import { PersonCard } from "components/Shared";
import { Col, Container, Row } from "react-bootstrap";
import Crew from "components/Crew/Crew";
import { withRouter } from "react-router-dom";

const CastAndCrew = ({ cast, crew, history }) => {
  const navigateToDetail = (id) => {
    history.push("/person/" + id);
  };
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="mt-3">
          <Col xs={9}>
            <h6>Cast</h6>
            <Row>
              {cast.map((person) => (
                <Col
                  xs={12}
                  md={2}
                  sm={4}
                  onClick={() => navigateToDetail(person.id)}
                >
                  <PersonCard {...person} key={person.id} />
                </Col>
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

export default withRouter(CastAndCrew);
