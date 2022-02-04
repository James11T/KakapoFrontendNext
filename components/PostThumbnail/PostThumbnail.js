import { useState } from "react";

import Icon from "../Icon/Icon";

import styles from "./PostThumbnail.module.css";

const PostThumbnail = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnClick = () => {
    console.log("Click");
  };

  return (
    <div
      className={styles.postThumbnail}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
    >
      <div className={styles.postThumbnailInfo}>
        <span>
          <Icon>like</Icon>0
        </span>
        <span>
          <Icon>comment</Icon>0
        </span>
      </div>
    </div>
  );
};

export default PostThumbnail;
