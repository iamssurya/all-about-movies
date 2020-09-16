import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { peekMovieDetails } from "store/actions/movieDetails";
import { selectMovieId } from "store/dispatchers";
import { DataNotFound, Loader } from "components/Shared";

class Movie extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { movieId },
      },
    } = this.props;

    if (movieId) {
      dispatch(selectMovieId(movieId));
      dispatch(peekMovieDetails(movieId));
    }
  }

  render() {
    const { isFetching, isEmpty, movieDetail } = this.props;

    if (isEmpty) {
      return <DataNotFound />;
    }

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <h1>Movie Detail</h1>
        <p>{JSON.stringify(movieDetail, null, 2)}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedMovieId, movieDetailsReducer } = state;

  const { isFetching, isEmpty } = movieDetailsReducer[selectedMovieId] || true;
  const movieDetail = movieDetailsReducer[selectedMovieId];

  return {
    movieDetail,
    isFetching,
    isEmpty,
  };
};

export default withRouter(connect(mapStateToProps)(Movie));
