import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { peekPersonDetails } from "store/actions";
import { selectPersonId } from "store/dispatchers";
import { DataNotFound, Loader } from "components/Shared";

class Person extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
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

    if (isEmpty) {
      return <DataNotFound />;
    }

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <h1>Person Details</h1>
        <p>{JSON.stringify(personDetail, null, 2)}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedPersonId, personDetailsReducer } = state;

  const { isFetching, isEmpty } = personDetailsReducer[selectedPersonId] || true;
  const personDetail = personDetailsReducer[selectedPersonId];

  return {
    personDetail,
    isFetching,
    isEmpty,
  };
};

export default withRouter(connect(mapStateToProps)(Person));
