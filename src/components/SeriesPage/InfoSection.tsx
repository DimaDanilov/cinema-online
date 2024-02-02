import styles from "@/styles/components/infoSection.module.scss";
import { MovieInfoModel } from "@/types/MovieInfo";
import { Button } from "@/ui/Button";

type InfoSectionProps = Pick<
  MovieInfoModel,
  "countries" | "name" | "genres" | "quality" | "audio" | "videos"
>;

export const InfoSection = ({
  countries,
  name,
  genres,
  quality,
  audio,
  videos,
}: InfoSectionProps) => {
  return (
    <div className={styles.infoSectionContainer}>
      <h2>Информация</h2>
      <div className={styles.grid}>
        <div className={styles.gridElement}>
          <h6>Премьера в мире</h6>
          <p>
            {videos?.movie
              ? videos.movie[0].date
              : videos?.seasons && videos.seasons[0].episodes[0].date}
          </p>
        </div>
        <div className={styles.gridElement}>
          <h6>Страны</h6>
          <div className={styles.itemRow}>
            {countries.map((country) => (
              <p key={country}>{country}</p>
            ))}
          </div>
        </div>
        <div className={styles.gridElement}>
          <h6>Язык аудиодорожки</h6>
          <div className={styles.itemRow}>
            {audio.map((lang) => (
              <p key={lang}>{lang}</p>
            ))}
          </div>
        </div>
        <div className={styles.gridElement}>
          <h6>Оригинальное название</h6>
          <p>{name.original}</p>
        </div>
        <div className={styles.gridElement}>
          <h6>Жанры</h6>
          <div className={styles.itemRow}>
            {genres.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
        </div>
        <div className={styles.gridElement}>
          <h6>Качество</h6>
          <Button background="gray">{quality}</Button>
        </div>
      </div>
    </div>
  );
};
