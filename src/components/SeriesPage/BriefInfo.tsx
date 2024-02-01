import { BookMarkIcon } from "@/assets/icons/BookMarkIcon";
import { HeartIcon } from "@/assets/icons/HeartIcon";
import styles from "@/styles/components/BriefInfo.module.scss";
import { MovieInfoModel } from "@/types/MovieInfo";
import { Button } from "@/ui/Button";

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
      <div className={["absolute", styles["image-container"]].join(" ")}>
        <div className="relative">
          <img
            src={backgroundImage}
            alt=""
            className={styles["series-background-img"]}
          />
          <div className={["absolute", styles["vignette-left"]].join(" ")} />
          <div className={["absolute", styles["vignette-bottom"]].join(" ")} />
          <div className={["absolute", styles["vignette-radial"]].join(" ")} />
        </div>
      </div>

      <div className={styles["block-container"]}>
        {logoUrl ? (
          <img src={logoUrl} alt={name.rus} className={styles["img-logo"]} />
        ) : (
          <h2 className={styles["img-replacement"]}>{name.rus}</h2>
        )}
        <div className={styles["brief-characteristics"]}>
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
          <div className={styles["chars-section-container"]}>
            {countries.map((country, index) => (
              <h6 key={index}>{country}</h6>
            ))}
          </div>
          <div className={styles["chars-section-container"]}>
            {genres.map((genre, index) => (
              <h6 key={index}>{genre}</h6>
            ))}
          </div>
          <h6>{age}</h6>
        </div>
        <p>{description.short}</p>
        <div className={styles["button-container"]}>
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
