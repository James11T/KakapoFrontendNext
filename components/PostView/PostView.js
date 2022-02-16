import classNames from "classnames";

import { usePostView } from "../../hooks/postview";
import Post from "../Post/Post";
import Icon from "../Icon/Icon";

import styles from "./PostView.module.css";

const viewBackgroundId = "postViewBG";

const PostView = () => {
  const { postViewState, hidePost } = usePostView();

  const handleCloseOnClick = () => {
    hidePost();
  };

  const handleBackgroundOnClick = (event) => {
    if (event.target.id === viewBackgroundId) {
      hidePost();
    }
  };

  return (
    <div
      className={classNames(
        styles.postViewContainer,
        !postViewState.postVisible && styles.hidden
      )}
      onClick={handleBackgroundOnClick}
      id={viewBackgroundId}
    >
      <div className={styles.postView}>
        {postViewState.post && <Post post={postViewState.post} />}
      </div>
      <button className={styles.closeButton} onClick={handleCloseOnClick}>
        <Icon>close</Icon>
      </button>
    </div>
  );
};

export default PostView;
