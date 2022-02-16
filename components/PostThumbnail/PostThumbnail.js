import Link from "next/link";
import { useState } from "react";

import Icon from "../Icon/Icon";

import styles from "./PostThumbnail.module.css";

const PostThumbnail = () => {
  return (
    <Link href="#">
      <div className={styles.postThumbnail}>
        <img src="/post.png" alt="post" />

        <div className={styles.postThumbnailInfo}>
          <span>
            <Icon>like</Icon>0
          </span>
          <span>
            <Icon>comment</Icon>0
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostThumbnail;
