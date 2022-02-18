import Link from "next/link";

import PersonRounded from "@mui/icons-material/PersonRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import MenuOpenRounded from "@mui/icons-material/MenuOpenRounded";

import styles from "./TopBar.module.css";
import { useUser } from "../../hooks/user";

const TopBar = ({ toggleNav, navOpen }) => {
  const { user } = useUser();

  const handleMenuOnClick = (event) => {
    toggleNav && toggleNav(event);
  };

  const MenuIcon = navOpen ? MenuOpenRounded : MenuRounded;

  return (
    <div className={styles.topBar}>
      <div className={styles.topBarHeader}>
        <button onClick={handleMenuOnClick}>
          <MenuIcon className={styles.menuIcon} />
        </button>
        <Link href="/">
          <a className={styles.topBarBranding}>
            <img src="/LogoGreen.svg" alt="kakapo logo" />
            <div className={styles.navName}>Kakapo</div>
          </a>
        </Link>
      </div>
      <div className={styles.profileSection}>
        <Link
          href={user.isAuthenticated ? `/profile/${user.kakapo_id}` : "/signin"}
        >
          <a className={styles.profileLink}>
            <PersonRounded className={styles.menuIcon} />
            {user.isAuthenticated ? user.display_name : "Sign In"}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
