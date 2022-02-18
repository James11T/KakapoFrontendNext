import Link from "next/link";

import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

import styles from "./NavLink.module.css";

const NavLink = ({ icon: Icon, href, children: text }) => {
  return (
    <Link href={href} className={styles.navLink}>
      <a className={styles.navLinkContainer}>
        <KeyboardArrowRightRounded className={styles.focusIcon} />
        <Icon className={styles.navIcon} />
        <span className={styles.navLinkText}>{text}</span>
      </a>
    </Link>
  );
};

export default NavLink;
