import { formatNumber } from "../../../utils/numbers";
import Icon from "../../Icon/Icon";

import styles from "./PostControl.module.css";

const PostControl = ({ icon, value, onClick }) => {
  const handleOnClick = (event) => {
    onClick && onClick(event);
  };

  return (
    <button className={styles.postControl} onClick={handleOnClick}>
      <Icon className={styles.controlIcon}>{icon}</Icon>
      {value && (
        <span className={styles.postControlValue}>{formatNumber(value)}</span>
      )}
    </button>
  );
};

export default PostControl;
