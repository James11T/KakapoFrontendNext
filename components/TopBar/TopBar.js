import Link from "next/link";

import Icon from "../Icon/Icon";

import styles from "./TopBar.module.css";
import { useUser } from "../../hooks/user";

const TopBar = ({ toggleNav, navOpen }) => {
  const [user] = useUser();

  const handleMenuOnClick = (event) => {
    toggleNav && toggleNav(event);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.topBarHeader}>
        <button onClick={handleMenuOnClick}>
          <Icon className={styles.menuIcon}>
            {navOpen ? "menuOpen" : "menu"}
          </Icon>
        </button>
        <Link href="/">
          <a className={styles.topBarBranding}>
            <img src="/LogoGreen.svg" alt="kakapo logo" />
            <div className={styles.navName}>Kakapo</div>
          </a>
        </Link>
      </div>
      <div className={styles.profileSection}>
        {user.isAuthenticated && (
          <Link href={`/profile/${user.kakapo_id}`}>
            <a className={styles.profileLink}>
              <Icon>person</Icon>
              {user.display_name}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopBar;
