import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import styles from "./page.module.scss";

import { MovieInfoModel } from "@/types/MovieInfo";
import { findMovieById } from "@/utils/findMovieById";
import { BriefInfo } from "@/components/SeriesPage/BriefInfo";

export default function SeriesPage({
  params,
}: {
  params: { seriesId: string };
}) {
  const movie: MovieInfoModel = findMovieById(Number(params.seriesId));

  return (
    <PageLayout>
      <BriefInfo
        description={movie.description}
        logoUrl={movie.logoUrl}
        backgroundImage={movie.backgroundImage}
        name={movie.name}
        rating={movie.rating}
        genres={movie.genres}
        countries={movie.countries}
        age={movie.age}
      />
    </PageLayout>
  );
}
