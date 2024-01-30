import styles from "@/styles/components/Sidebar.module.scss";
import { HeartIcon } from "@/assets/icons/HeartIcon";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { MovieIcon } from "@/assets/icons/MovieIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { TvIcon } from "@/assets/icons/TvIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";
import { MainLogo } from "@/assets/icons/MainLogo";

export const Sidebar = () => {
  return (
    <nav className={styles["navigation-sidebar"]}>
      <MainLogo className={styles["main-icon"]} />
      <div className={styles["icons-container"]}>
        <SearchIcon className={styles["sidebar-icon"]} />
        <HomeIcon className={styles["sidebar-icon"]} />
        <MovieIcon className={styles["sidebar-icon"]} />
        <TvIcon className={styles["sidebar-icon"]} />
        <HeartIcon className={styles["sidebar-icon"]} />
        <ProfileIcon className={styles["sidebar-icon"]} />
      </div>
    </nav>
  );
};
