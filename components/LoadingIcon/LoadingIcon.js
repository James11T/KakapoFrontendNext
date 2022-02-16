import classNames from "classnames";
import Icon from "../Icon/Icon";

import styles from "./LoadingIcon.module.css";

const LoadingIcon = ({ isLoading }) => {
  return (
    <div className={styles.loadingIcon}>
      <div className={classNames(isLoading && styles.isLoading)}>
        <Icon className={styles.loadingSpinner}>
          {isLoading ? "refresh" : "done"}
        </Icon>
      </div>
    </div>
  );
};

export default LoadingIcon;
