import { BookMarkIcon } from "assets/icons/BookMarkIcon";
import { HeartIcon } from "assets/icons/HeartIcon";
import styles from "styles/components/BriefInfo.module.scss";
import { MovieInfoModel } from "types/MovieInfo";
import { Button } from "ui/Button";

type BriefInfoProps = Pick<
  MovieInfoModel,
  | "description"
  | "logoUrl"
  | "backgroundImage"
  | "name"
  | "rating"
  | "genres"
  | "countries"
  | "age"
  | "videos"
>;

export const BriefInfo = ({
  description,
  logoUrl,
  backgroundImage,
  name,
  rating,
  genres,
  countries,
  age,
  videos,
}: BriefInfoProps) => {
  return (
    <div className="relative">
      <div className={["absolute", styles.imageContainer].join(" ")}>
        <div className="relative">
          <img
            src={backgroundImage}
            alt=""
            className={styles.seriesBackgroundImg}
          />
          <div className={["absolute", styles.vignetteLeft].join(" ")} />
          <div className={["absolute", styles.vignetteBottom].join(" ")} />
          <div className={["absolute", styles.vignetteRadial].join(" ")} />
        </div>
      </div>

      <div className={styles.blockContainer}>
        {logoUrl ? (
          <img src={logoUrl} alt={name.rus} className={styles.imgLogo} />
        ) : (
          <h2 className={styles.imgReplacement}>{name.rus}</h2>
        )}
        <div className={styles.briefCharacteristics}>
          <Button background="gray">{rating}</Button>
          <h6>
            {/* Takes year of the first episode and year of the last */}
            {videos?.movie
              ? videos.movie[0].date.substring(0, 4)
              : videos?.seasons &&
                `${videos.seasons[0].episodes[0].date.substring(
                  0,
                  4
                )}-${videos.seasons[videos.seasons.length - 1].episodes[
                  videos.seasons[videos.seasons.length - 1].episodes.length - 1
                ].date.substring(0, 4)}`}
          </h6>
          <div className={styles.charsSectionContainer}>
            {countries.map((country, index) => (
              <h6 key={index}>{country}</h6>
            ))}
          </div>
          <div className={styles.charsSectionContainer}>
            {genres.map((genre, index) => (
              <h6 key={index}>{genre}</h6>
            ))}
          </div>
          <h6>{age}</h6>
        </div>
        <p>{description.short}</p>
        <div className={styles.buttonContainer}>
          <Button background="cyber">Смотреть</Button>
          <Button background="gray">Трейлер</Button>
          <Button background="gray">
            <BookMarkIcon />
          </Button>
          <Button background="gray">
            <HeartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
