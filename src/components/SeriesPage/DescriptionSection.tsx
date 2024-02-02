import styles from "styles/components/SeriesPage/DescriptionSection.module.scss";
import { WarningIcon } from "assets/icons/WarningIcon";
import { MovieInfoModel } from "types/MovieInfo";
import { warningsMessages } from "types/Warnings";

type DescriptionSectionProps = Pick<MovieInfoModel, "description" | "warnings">;

export const DescriptionSection = ({
  description,
  warnings,
}: DescriptionSectionProps) => {
  return (
    <div className={styles.descriptionSectionContainer}>
      <h2>Описание</h2>
      <p>{description.full}</p>
      {warnings &&
        Object.keys(warnings).map((warningKey) => {
          return (
            <div key={warningKey} className={styles.warningContainer}>
              <WarningIcon />
              <p>{warningsMessages[warningKey]}</p>
            </div>
          );
        })}
    </div>
  );
};
