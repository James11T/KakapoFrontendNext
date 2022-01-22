import Link from "next/link";
import styles from "../styles/404.module.css";

const error404 = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorHeader}>404</div>
      <div className={styles.errorDivider}></div>
      <div className={styles.errorText}>
        <p>Looks like this page is missing. </p>
        <Link href="/">Take me back to the home page.</Link>
      </div>
    </div>
  );
};

export default error404;
