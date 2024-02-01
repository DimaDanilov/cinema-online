import styles from "@/styles/components/infoSection.module.scss";
import { MovieInfoModel } from "@/types/MovieInfo";
import { Button } from "@/ui/Button";

type InfoSectionProps = Pick<
  MovieInfoModel,
  "countries" | "name" | "genres" | "quality" | "audio"
>;

export const InfoSection = ({
  countries,
  name,
  genres,
  quality,
  audio,
}: InfoSectionProps) => {
  return (
    <div className={styles["info-section-container"]}>
      <h2>Информация</h2>
      <div className={styles["grid"]}>
        <div className={styles["grid-element"]}>
          <h6>Премьера в мире</h6>
          <p>дд-мм-гггг</p>
        </div>
        <div className={styles["grid-element"]}>
          <h6>Страны</h6>
          <div className={styles["item-row"]}>
            {countries.map((country) => (
              <p key={country}>{country}</p>
            ))}
          </div>
        </div>
        <div className={styles["grid-element"]}>
          <h6>Язык аудиодорожки</h6>
          <div className={styles["item-row"]}>
            {audio.map((lang) => (
              <p key={lang}>{lang}</p>
            ))}
          </div>
        </div>
        <div className={styles["grid-element"]}>
          <h6>Оригинальное название</h6>
          <p>{name.original}</p>
        </div>
        <div className={styles["grid-element"]}>
          <h6>Жанры</h6>
          <div className={styles["item-row"]}>
            {genres.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
        </div>
        <div className={styles["grid-element"]}>
          <h6>Качество</h6>
          <Button background="gray">{quality}</Button>
        </div>
      </div>
    </div>
  );
};
