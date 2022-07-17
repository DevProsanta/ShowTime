//const process.env.API_KEY = process.env.process.env.API_KEY;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en=US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en=US`,
  },
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=878`,
  },
  fetchTV: {
    title: "TV Shows",
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10770`,
  },
};
