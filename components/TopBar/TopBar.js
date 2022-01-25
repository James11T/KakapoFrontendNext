import { useContext } from "react";
import Link from "next/link";

import { userContext } from "../../pages/_app";

import Icon from "../Icon/Icon";

import styles from "./TopBar.module.css";

const TopBar = ({ toggleNav = () => {} }) => {
  const { user } = useContext(userContext);
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarHeader}>
        <button onClick={toggleNav}>
          <Icon>menu</Icon>
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
