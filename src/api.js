import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d72dd1ba6c0d1b77338e9259724d1db9",
    language: "ko-KR"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: term
      }
    }),
  videos: id => api.get(`/movie/${id}/videos`)
};
