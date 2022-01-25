import Link from "next/link";

import styles from "./ErrorPage.module.css";

const ErrorPage = ({ code = "error", message = "An error occurred." }) => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorHeader}>{code}</div>
      <div className={styles.errorDivider}></div>
      <div className={styles.errorText}>
        <p>{message}</p>
        <Link href="/">Take me back to the home page.</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
