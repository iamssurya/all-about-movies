import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peekMovies } from "store/actions";
import { DataNotFound, Loader } from "components/Shared";

class MoviesList extends React.Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    total_pages: PropTypes.number.isRequired,
    total_results: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedMovieList } = this.props;
    dispatch(peekMovies(selectedMovieList));
  }

  render() {
    const { isEmpty, isFetching, movies } = this.props;
    
    if(isEmpty) {
      return <DataNotFound />
    }

    if(isFetching) {
      return <Loader />
    }

    return (
      <React.Fragment>
        <h1>Movies</h1>
        <p>{!isEmpty && JSON.stringify(movies, null, 2)}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedMovieList, moviesReducer } = state;

  const {
    results,
    page,
    isFetching,
    isEmpty,
    total_pages,
    total_results,
  } = moviesReducer[selectedMovieList] || {
    isFetching: true,
    movies: [],
    total_pages: 1,
    total_results: 1
  };

  return {
    movies: results,
    page,
    isFetching,
    total_pages,
    isEmpty,
    total_results,
    selectedMovieList
  };
};

export default connect(mapStateToProps)(MoviesList);
