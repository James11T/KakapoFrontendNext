import MoreButton from "../../MoreButton/MoreButton";
import TextTruncator from "../../TextTruncator/TextTruncator";
import PostControl from "../PostControl/PostControl";

import styles from "./PostComment.module.css";

const PostComment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentContent}>
        <img src={comment.author.pfp} alt="commenter" className={styles.pfp} />
        <div className={styles.contentArea}>
          <div className={styles.commentNames}>
            <div className={styles.commentDisplayName}>
              {comment.author.display_name}
            </div>
            <div className={styles.commentKakapoID}>
              @{comment.author.kakapo_id}
            </div>
          </div>
          <div className={styles.commentText}>
            <TextTruncator maxLength={100}>{comment.content}</TextTruncator>
          </div>
        </div>
        <div className={styles.commentAction}>
          <MoreButton />
        </div>
      </div>
      <div className={styles.commentControls}>
        <div className={styles.commentLikeControl}>
          <PostControl icon="like" value={0} />
        </div>
      </div>
    </div>
  );
};

export default PostComment;
