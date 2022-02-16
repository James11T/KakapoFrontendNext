import MoreButton from "../MoreButton/MoreButton";
import PostControl from "./PostControl/PostControl";
import TextTruncator from "../TextTruncator/TextTruncator";

import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <img src="/pfp.png" alt="profile" className={styles.pfp} />
        <div className={styles.authorNames}>
          <div className={styles.authorDisplayName}>
            {post.author.display_name}
          </div>
          <div className={styles.authorKakapoID}>@{post.author.kakapo_id}</div>
        </div>
        <div className={styles.actionCol}>
          <MoreButton />
        </div>
      </header>
      <section className={styles.postMediaSection}>
        <img src="/post.png" alt="post media" className={styles.postMedia} />
      </section>
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
    </article>
  );
};

export default Post;
