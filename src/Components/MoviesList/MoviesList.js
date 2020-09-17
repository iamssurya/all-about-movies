import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peekMovies } from "store/actions";
import { DataNotFound, Loader } from "components/Shared";
import { Row } from "react-bootstrap";
import { MovieCard } from "../Shared";

import "./MoviesList.scss";

class MoviesList extends React.Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    total_pages: PropTypes.number.isRequired,
    total_results: PropTypes.number.isRequired,
    selectedMovieList: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedMovieList } = this.props;
    dispatch(peekMovies(selectedMovieList));
  }

  render() {
    const { isEmpty, isFetching, movies, selectedMovieList } = this.props;

    if (isEmpty) {
      return <DataNotFound />;
    }

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <h4 className="movies-list-title">Results for {selectedMovieList}</h4>
        <Row>
          {movies.map((movie) => (
            <MovieCard data={movie} key={movie.id} className="movie-card" />
          ))}
        </Row>
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
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  };

  return {
    movies: results,
    page,
    isFetching,
    total_pages,
    isEmpty,
    total_results,
    selectedMovieList,
  };
};

export default connect(mapStateToProps)(MoviesList);
