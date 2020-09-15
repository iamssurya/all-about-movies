import { API_KEY, API_URL } from "../site-config";
import API from "../Utils/apiHelper";

const movieBasePath = "movie";
const apiKey = `api_key=${API_KEY}`;

/**
 * GET POPULAR MOVIES LIST
 */
const getPopularMoviesList = () => {
  return API.get(`${API_URL}${movieBasePath}/popular?${apiKey}`);
};

const getMovieDetail = (movieId) => {
  const movieDetail = API.get(
    `${API_URL}/${movieBasePath}/${movieId}?${apiKey}`
  );
  const movieCredits = API.get(
    `${API_URL}/${movieBasePath}/${movieId}/credits?${apiKey}`
  );

  return Promise.all([movieDetail, movieCredits]);
};

const searchMovie = (movie) => {
  return API.get(`${API_URL}/${movieBasePath}?${apiKey}&query=${movie}`);
};

export { getPopularMoviesList, getMovieDetail, searchMovie };
