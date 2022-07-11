import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const API_KEY = "3dd73bc5602d72433e8418bc312e6ea9";

export const getTrendingMovies = async (page = 1) => {
  const {
    data: { results },
  } = await instance.get("trending/movie/day", {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  return results;
};

export const getMovieById = async (id) => {
  const { data } = await instance.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await instance.get("search/movie", {
    params: {
      api_key: API_KEY,
      page,
      query,
    },
  });
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await instance.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await instance.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};
