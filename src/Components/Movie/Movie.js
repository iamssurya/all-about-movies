import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { peekMovieDetails } from "store/actions/movieDetails";
import { selectMovieId } from "store/dispatchers";
import { Banner, DataNotFound, Loader } from "components/Shared";
import CastAndCrew from "components/CastAndCrew/CastAndCrew";

class Movie extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }),
    }),
    movieDetail: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isEmpty: PropTypes.bool.isRequired,
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
    const { generalDetails, castAndCrewDetails } = movieDetail || {};

    if (isFetching || !generalDetails) {
      return <Loader />;
    }

    if (isEmpty) {
      return <DataNotFound />;
    }

    const releaseDate =
      (generalDetails.release_date &&
        new Date(generalDetails.release_date).getFullYear().toString()) ||
      "NA";

    return (
      <React.Fragment>
        <Banner
          background={generalDetails.backdrop_path}
          title={generalDetails.original_title}
          tagline={generalDetails.tagline}
          runtime={generalDetails.runtime}
          overview={generalDetails.overview}
          releaseDate={releaseDate}
        />
        <CastAndCrew {...castAndCrewDetails} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedMovieId, movieDetailsReducer } = state;

  const { isFetching, isEmpty } = movieDetailsReducer[selectedMovieId] || {
    isFetching: true,
    isEmpty: false,
  };
  const movieDetail = movieDetailsReducer[selectedMovieId] || {};

  return {
    movieDetail,
    isFetching,
    isEmpty,
  };
};

export default withRouter(connect(mapStateToProps)(Movie));
