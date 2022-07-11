import axios from "axios";

// const API_KEY = '3dd73bc5602d72433e8418bc312e6ea9';
// const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

// export const getMovies = async () => await axios.get(BASE_URL);

// const API_KEY = '3dd73bc5602d72433e8418bc312e6ea9';
// const instance = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
// });



// export const getMovies = async (page) => {
//     const { data: {results} } = await instance.get("trending/movie/day", {
//         params: {
//             api_key: API_KEY,
//             page
//         }
//     });
//     return results;
// } 

// export default getMovies;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const APIkey = "3dd73bc5602d72433e8418bc312e6ea9";

export const getTrendingMovies = async (page = 1) => {
  const {
    data: { results },
  } = await instance.get("trending/movie/day", {
    params: {
      api_key: APIkey,
      page,
    },
  });
  return results;
};

export const getMovieById = async (id) => {
  const { data } = await instance.get(`movie/${id}`, {
    params: {
      api_key: APIkey,
    },
  });
  return data;
};

// export const searchMovies = async (q) => {
//   const {
//     data: { results },
//   } = await instance.get("search/movie", {
//     params: {
//       api_key: APIkey,
//       q
//     },
//   });
//   return results;
// };

export const searchMovies = async (query, page = 1) => {
  const { data } = await instance.get("search/movie", {
    params: {
      api_key: APIkey,
      page,
      query,
    },
  });
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await instance.get(`movie/${id}/credits`, {
    params: {
      api_key: APIkey,
    },
  });
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await instance.get(`movie/${id}/reviews`, {
    params: {
      api_key: APIkey,
    },
  });
  return data.results;
};
