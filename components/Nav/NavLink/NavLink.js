import Link from "next/link";
import Icon from "../../Icon/Icon";

import styles from "./NavLink.module.css";

const NavLink = ({ icon, children, href }) => {
  return (
    <Link href={href} className={styles.navLink}>
      <a className={styles.navLinkContainer}>
        <Icon>{icon}</Icon>
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default NavLink;
