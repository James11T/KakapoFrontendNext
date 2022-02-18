import classNames from "classnames";

import RefreshRounded from "@mui/icons-material/RefreshRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";

import styles from "./LoadingIcon.module.css";

const LoadingIcon = ({ isLoading }) => {
  const Icon = isLoading ? RefreshRounded : DoneRounded;

  return (
    <div className={styles.loadingIcon}>
      <div className={classNames(isLoading && styles.isLoading)}>
        <Icon className={styles.loadingSpinner} />
      </div>
    </div>
  );
};

export default LoadingIcon;
