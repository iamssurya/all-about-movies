// External Dependencies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

// Internal Dependencies
import { peekPersonDetails } from "store/actions";
import { selectPersonId } from "store/dispatchers";
import { DataNotFound, Loader, MovieCard, PersonCard } from "components/Shared";

import "./Person.scss";

class Person extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        personId: PropTypes.string.isRequired,
      }),
    }),
    isFetching: PropTypes.bool,
    isEmpty: PropTypes.bool,
    personDetails: PropTypes.shape({
      name: PropTypes.string,
      birthday: PropTypes.string,
      place_of_birth: PropTypes.string,
      also_known_as: PropTypes.array,
      biography: PropTypes.string,
    }),
    personCredits: PropTypes.shape({
      cast: PropTypes.array,
      crew: PropTypes.array,
    }),
  };

  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { personId },
      },
    } = this.props;

    if (personId) {
      dispatch(selectPersonId(personId));
      dispatch(peekPersonDetails(personId));
    }
  }

  render() {
    const { isFetching, isEmpty, personDetails, personCredits } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (isEmpty || !personDetails) {
      return <DataNotFound />;
    }

    const {
      name,
      birthday,
      place_of_birth,
      also_known_as,
      biography,
    } = personDetails;

    const { cast } = personCredits;

    return (
      <React.Fragment>
        <Container className="person-detail">
          <Row>
            <Col xs={12} md={4}>
              <PersonCard {...personDetails} />
            </Col>
            <Col xs={12} md={8} className="person-info">
              {name && <h3>{name}</h3>}
              {birthday && <p className="birthday">Born on {birthday}</p>}
              {place_of_birth && (
                <p className="place-of-birth">{place_of_birth}</p>
              )}
              {also_known_as && also_known_as.length > 0 && (
                <p className="also-known-as">
                  Also Known As {also_known_as.join(",")}
                </p>
              )}
              {biography && <p className="biography">{biography}</p>}
            </Col>
          </Row>
        </Container>
        {cast && cast.length > 0 && (
          <Container fluid>
            <Row>
              <Col>
                <h4 className="movies-list-title">Movies ({cast.length})</h4>
                <Row>
                  {cast.map((movie) => (
                    <MovieCard
                      data={movie}
                      key={movie.id}
                      className="movie-card"
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedPersonId, personDetailsReducer } = state;

  const { isFetching, isEmpty } =
    personDetailsReducer[selectedPersonId] || true;
  const detail = personDetailsReducer[selectedPersonId];
  let personDetails = {};
  let personCredits = {};
  if (detail && detail.generalDetails && detail.personCredits) {
    personDetails = detail.generalDetails;
    personCredits = detail.personCredits;
  }

  return {
    personDetails,
    personCredits,
    isFetching,
    isEmpty,
  };
};

export default withRouter(connect(mapStateToProps)(Person));
