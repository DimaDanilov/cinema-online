import styles from "@/styles/components/MainPremiere.module.scss";
import mainPremiereData from "@/data/mainPremiere.json";
import { MainPremiereModel } from "@/types/MainPremiere";
import { Button } from "@/ui/Button";

const mainPremiere: MainPremiereModel = mainPremiereData;

export const MainPremiere = () => {
  return (
    <div className={styles["premiere-container"]}>
      <img src={mainPremiere.movieLogoUrl} alt="" />
      <p>{mainPremiere.description}</p>
      <div className={styles["button-container"]}>
        <Button background="cyber">Смотреть</Button>
        <Button background="gray">О фильме</Button>
      </div>
    </div>
  );
};
