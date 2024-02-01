import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import styles from "./page.module.scss";

import topViewMoviesData from "@/data/topViewMovies.json";
import { MovieInfoModel } from "@/types/MovieInfo";
import { findMovieById } from "@/utils/findMovieById";

export default function SeriesPage({
  params,
}: {
  params: { seriesId: string };
}) {
  const movie: MovieInfoModel | undefined = findMovieById(
    Number(params.seriesId)
  );

  return (
    <PageLayout>
      <h1>{movie?.name}</h1>
      <h1>Id of the series: {params.seriesId}</h1>
    </PageLayout>
  );
}
