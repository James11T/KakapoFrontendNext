import { formatNumber } from "../../../utils/numbers";

import styles from "./PostControl.module.css";

const PostControl = ({ icon: Icon, value, onClick }) => {
  const handleOnClick = (event) => {
    onClick && onClick(event);
  };

  return (
    <button className={styles.postControl} onClick={handleOnClick}>
      <Icon className={styles.controlIcon} />
      {value && (
        <span className={styles.postControlValue}>{formatNumber(value)}</span>
      )}
    </button>
  );
};

export default PostControl;
