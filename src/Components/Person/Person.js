import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { peekPersonDetails } from "store/actions";
import { selectPersonId } from "store/dispatchers";
import { DataNotFound, Loader, PersonCard } from "components/Shared";
import { Container, Col, Row } from "react-bootstrap";

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
    personDetail: PropTypes.shape({
      name: PropTypes.string,
      birthday: PropTypes.string,
      place_of_birth: PropTypes.string,
      also_known_as: PropTypes.array,
      biography: PropTypes.string,
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
    const { isFetching, isEmpty, personDetail } = this.props;

    if (isEmpty || !personDetail) {
      return <DataNotFound />;
    }

    if (isFetching) {
      return <Loader />;
    }

    const {
      name,
      birthday,
      place_of_birth,
      also_known_as,
      biography,
    } = personDetail;

    return (
      <React.Fragment>
        <Container className="person-detail">
          <Row>
            <Col xs={4}>
              <PersonCard {...personDetail} />
            </Col>
            <Col xs={8} className="person-info">
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedPersonId, personDetailsReducer } = state;

  const { isFetching, isEmpty } =
    personDetailsReducer[selectedPersonId] || true;
  const personDetail = personDetailsReducer[selectedPersonId];

  return {
    personDetail,
    isFetching,
    isEmpty,
  };
};

export default withRouter(connect(mapStateToProps)(Person));
