import Link from "next/link";

import Icon from "../Icon/Icon";

import styles from "./TopBar.module.css";

const TopBar = ({ toggleNav = () => {} }) => {
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
    </div>
  );
};

export default TopBar;
