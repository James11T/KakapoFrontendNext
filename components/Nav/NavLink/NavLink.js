import Link from "next/link";

import Icon from "../../Icon/Icon";

import styles from "./NavLink.module.css";

const NavLink = ({ icon, children, href }) => {
  return (
    <Link href={href} className={styles.navLink}>
      <a className={styles.navLinkContainer}>
        <Icon className={styles.focusIcon}>right</Icon>
        <Icon>{icon}</Icon>
        <span className={styles.navLinkText}>{children}</span>
      </a>
    </Link>
  );
};

export default NavLink;
