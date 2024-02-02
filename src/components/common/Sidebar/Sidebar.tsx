import styles from "styles/components/Sidebar.module.scss";
import { HeartIcon } from "assets/icons/HeartIcon";
import { HomeIcon } from "assets/icons/HomeIcon";
import { MovieIcon } from "assets/icons/MovieIcon";
import { SearchIcon } from "assets/icons/SearchIcon";
import { TvIcon } from "assets/icons/TvIcon";
import { ProfileIcon } from "assets/icons/ProfileIcon";
import { MainLogo } from "assets/icons/MainLogo";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <nav className={styles.navigationSidebar}>
      <Link href="/">
        <MainLogo className={styles.mainIcon} />
      </Link>
      <div className={styles.iconsContainer}>
        <SearchIcon className={styles.sidebarIcon} />
        <Link href="/">
          <HomeIcon className={styles.sidebarIcon} />
        </Link>
        <MovieIcon className={styles.sidebarIcon} />
        <TvIcon className={styles.sidebarIcon} />
        <HeartIcon className={styles.sidebarIcon} />
        <ProfileIcon className={styles.sidebarIcon} />
      </div>
    </nav>
  );
};
