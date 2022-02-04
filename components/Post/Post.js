import MoreButton from "../MoreButton/MoreButton";
import PostComment from "./PostComment/PostComment";
import PostControl from "./PostControl/PostControl";
import TextTruncator from "../TextTruncator/TextTruncator";

import styles from "./Post.module.css";

const testComment = {
  content: "Test Content ".repeat(10),
  author: {
    kakapo_id: "kakapo_id",
    display_name: "display name",
    pfp: "/pfp.png",
  },
};

const Post = ({ post }) => {
  return (
    <article className={styles.post}>
      <div className={styles.postCol}>
        <header className={styles.postHeader}>
          <img src="/pfp.png" alt="profile" className={styles.pfp} />
          <div className={styles.authorNames}>
            <div className={styles.authorDisplayName}>
              {post.author.display_name}
            </div>
            <div className={styles.authorKakapoID}>
              @{post.author.kakapo_id}
            </div>
          </div>
          <div className={styles.actionCol}>
            <MoreButton />
          </div>
        </header>
        <div className={styles.postMediaContainer}>
          <img src="/post.png" alt="post media" className={styles.postMedia} />
        </div>
        <footer className={styles.postFooter}>
          <div className={styles.postControls}>
            <div className={styles.likeControl}>
              <PostControl icon="like" value={0} />
            </div>
            <div className={styles.commentControl}>
              <PostControl icon="comment" value={0} />
            </div>
            <div className={styles.reportControl}>
              <PostControl icon="report" />
            </div>
            <div className={styles.saveControl}>
              <PostControl icon="save" />
            </div>
          </div>
          <div className={styles.postContent}>
            <TextTruncator maxLength={100}>{post.content}</TextTruncator>
          </div>
          <div className={styles.postDate}>Posted on 16:41 12/01/2022</div>
        </footer>
      </div>
      <div className={styles.commentCol}>
        <PostComment comment={testComment} />
      </div>
    </article>
  );
};

export default Post;
