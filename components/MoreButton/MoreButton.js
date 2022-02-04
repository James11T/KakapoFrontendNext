import Icon from "../Icon/Icon";

import styles from "./MoreButton.module.css";

const MoreButton = ({ onClick }) => {
  const handleOnClick = (event) => {
    onClick && onClick(event);
  };

  return (
    <button className={styles.moreButton} onClick={handleOnClick}>
      <Icon>more</Icon>
    </button>
  );
};

export default MoreButton;
