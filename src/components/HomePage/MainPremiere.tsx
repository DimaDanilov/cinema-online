import styles from "@/styles/components/MainPremiere.module.scss";
import mainPremiereData from "@/data/mainPremiere.json";
import { MovieInfoModel } from "@/types/MovieInfo";
import { Button } from "@/ui/Button";

const mainPremiere: MovieInfoModel = mainPremiereData;

export const MainPremiere = () => {
  return (
    <div className="relative">
      <img
        src={mainPremiere.backgroundImage}
        alt=""
        className={["absolute", styles["premiere-background"]].join(" ")}
      />
      <div className={styles["premiere-container"]}>
        <img src={mainPremiere.movieLogoUrl} alt="" />
        <p>{mainPremiere.description}</p>
        <div className={styles["button-container"]}>
          <Button background="cyber">Смотреть</Button>
          <Button background="gray">О фильме</Button>
        </div>
      </div>
    </div>
  );
};
