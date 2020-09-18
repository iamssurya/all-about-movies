import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peekMovies } from "store/actions";
import { Container, Row } from "react-bootstrap";
import { MovieCard, Banner, Loader, DataNotFound } from "../Shared";

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

    if (isEmpty || movies.length < 1) {
      return <DataNotFound />;
    }

    if (isFetching) {
      return <Loader />;
    }

    const firstMovie = movies[0];
    return (
      <React.Fragment>
        <Banner
          background={firstMovie.backdrop_path}
          title={firstMovie.original_title}
          tagline={firstMovie.tagline}
          overview={firstMovie.overview}
          releaseDate={new Date(firstMovie.release_date).getFullYear()}
        />
        <Container fluid className="mt-4">
          <h4 className="movies-list-title">Results for {selectedMovieList}</h4>
          <Row>
            {movies.map((movie) => (
              <MovieCard data={movie} key={movie.id} className="movie-card" />
            ))}
          </Row>
        </Container>
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
