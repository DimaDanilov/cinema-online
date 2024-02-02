import styles from "@/styles/components/MainPremiere.module.scss";
import mainPremiereData from "@/data/mainPremiere.json";
import { MovieInfoModel } from "@/types/MovieInfo";
import { Button } from "@/ui/Button";
import Link from "next/link";

const mainPremiere: MovieInfoModel = mainPremiereData;

export const MainPremiere = () => {
  return (
    <div className="relative">
      <div className={["absolute", styles.imageContainer].join(" ")}>
        <div className="relative">
          <img
            src={mainPremiere.backgroundImage}
            alt=""
            className={styles.seriesBackgroundImg}
          />
          <div className={["absolute", styles.vignetteLeft].join(" ")} />
          <div className={["absolute", styles.vignetteBottom].join(" ")} />
          <div className={["absolute", styles.vignetteRadial].join(" ")} />
        </div>
      </div>

      <div className={styles.premiereContainer}>
        <img src={mainPremiere.logoUrl} alt="" />
        <p>{mainPremiere.description.short}</p>
        <div className={styles.buttonContainer}>
          <Link href={`/series/${mainPremiere.id}`}>
            <Button background="cyber">Смотреть</Button>
          </Link>
          <Link href={`/series/${mainPremiere.id}`}>
            <Button background="gray">О фильме</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
