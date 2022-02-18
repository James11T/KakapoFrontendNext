import classNames from "classnames";

import { usePostView } from "../../hooks/postview";
import Post from "../Post/Post";
import CloseRounded from "@mui/icons-material/CloseRounded";

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
        <CloseRounded />
      </button>
    </div>
  );
};

export default PostView;
