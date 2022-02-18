import MoreRounded from "@mui/icons-material/MoreRounded";

import styles from "./MoreButton.module.css";

const MoreButton = ({ onClick }) => {
  const handleOnClick = (event) => {
    onClick && onClick(event);
  };

  return (
    <button className={styles.moreButton} onClick={handleOnClick}>
      <MoreRounded />
    </button>
  );
};

export default MoreButton;
