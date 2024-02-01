import styles from "@/styles/components/MainPremiere.module.scss";
import mainPremiereData from "@/data/mainPremiere.json";
import { MovieInfoModel } from "@/types/MovieInfo";
import { Button } from "@/ui/Button";

const mainPremiere: MovieInfoModel = mainPremiereData;

export const MainPremiere = () => {
  return (
    <div className="relative">
      <div className={["absolute", styles["image-container"]].join(" ")}>
        <div className="relative">
          <img
            src={mainPremiere.backgroundImage}
            alt=""
            className={styles["series-background-img"]}
          />
          <div className={["absolute", styles["vignette-left"]].join(" ")} />
          <div className={["absolute", styles["vignette-bottom"]].join(" ")} />
          <div className={["absolute", styles["vignette-radial"]].join(" ")} />
        </div>
      </div>

      <div className={styles["premiere-container"]}>
        <img src={mainPremiere.logoUrl} alt="" />
        <p>{mainPremiere.description.short}</p>
        <div className={styles["button-container"]}>
          <Button background="cyber">Смотреть</Button>
          <Button background="gray">О фильме</Button>
        </div>
      </div>
    </div>
  );
};
