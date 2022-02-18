import Link from "next/link";

import FavoriteRounded from "@mui/icons-material/FavoriteRounded";
import ChatIcon from "@mui/icons-material/QuestionAnswerRounded";

import styles from "./PostThumbnail.module.css";

const PostThumbnail = () => {
  return (
    <Link href="#">
      <div className={styles.postThumbnail}>
        <img src="/post.png" alt="post" />

        <div className={styles.postThumbnailInfo}>
          <span>
            <FavoriteRounded />0
          </span>
          <span>
            <ChatIcon />0
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostThumbnail;
