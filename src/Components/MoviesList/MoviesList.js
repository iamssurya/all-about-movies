import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peekMovies } from "store/actions";

class MoviesList extends React.Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    total_pages: PropTypes.number.isRequired,
    total_results: PropTypes.number.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(peekMovies());
  }

  render() {
    const { movies } = this.props;
    const isEmpty = !movies || movies.length === 0;

    return (
      <React.Fragment>
        <h1>Movies</h1>
        <p>{!isEmpty && JSON.stringify(movies)}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    moviesReducer: { movies, page, isFetching, total_pages, total_results },
  } = state;

  return {
    movies,
    page,
    isFetching,
    total_pages,
    total_results,
  };
};

export default connect(mapStateToProps)(MoviesList);
