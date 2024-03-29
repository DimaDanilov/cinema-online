import { PageLayout } from "layouts/PageLayout/PageLayout";
import { MovieInfoModel } from "types/MovieInfo";
import { findMovieById } from "utils/findMovieById";
import { BriefInfo } from "components/SeriesPage/BriefInfo";
import { DescriptionSection } from "components/SeriesPage/DescriptionSection";
import { InfoSection } from "components/SeriesPage/InfoSection";
import { SimilarCarousel } from "components/SeriesPage/SimilarCarousel";
import { VideoSection } from "components/SeriesPage/VideoSection";

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
        videos={movie.videos}
      />
      <VideoSection videos={movie.videos} />
      <DescriptionSection
        description={movie.description}
        warnings={movie.warnings}
      />
      <SimilarCarousel id={movie.id} />
      <InfoSection
        countries={movie.countries}
        name={movie.name}
        genres={movie.genres}
        quality={movie.quality}
        audio={movie.audio}
        videos={movie.videos}
      />
    </PageLayout>
  );
}
