import newMoviesData from "@/data/newMovies.json";
import topViewMoviesData from "@/data/topViewMovies.json";
import mainPremiereData from "@/data/mainPremiere.json";

import { MovieInfoModel } from "@/types/MovieInfo";

export const findMovieById = (id: number): MovieInfoModel => {
  const movieDataArray = [
    ...newMoviesData.data,
    ...topViewMoviesData.data,
    mainPremiereData,
  ];

  const foundMovie = movieDataArray.find((movie) => movie.id === id);

  return foundMovie || ({} as MovieInfoModel);
};
