import { useContext } from "react";

import { userContext } from "./_app";
import TextTruncator from "../components/TextTruncator/TextTruncator";
import PostControl from "../components/Post/PostControl/PostControl";

import styles from "../styles/debug.module.css";
import MoreButton from "../components/MoreButton/MoreButton";
import PostThumbnail from "../components/PostThumbnail/PostThumbnail";

const notSetText = "Not set";

const Debug = () => {
  const { user } = useContext(userContext);

  return (
    <div className={styles.debug}>
      <h2>Current User</h2>
      <div className={styles.user}>
        <ul>
          <li>
            <h4>Kakapo ID</h4>
            <p>{user.kakapo_id || notSetText}</p>
          </li>
          <li>
            <h4>Display Name</h4>
            <p>{user.display_name || notSetText}</p>
          </li>
          <li>
            <h4>Is Authenticated</h4>
            <p>{user.isAuthenticated ? "Yes" : "No"}</p>
          </li>
          <li>
            <h4>Token</h4>
            {user.token ? (
              <TextTruncator maxLength={20}>{user.token}</TextTruncator>
            ) : (
              notSetText
            )}
          </li>
        </ul>
      </div>
      <h2>Component Testing</h2>
      <PostThumbnail />
    </div>
  );
};

export default Debug;
