import { useContext } from "react";

import { userContext } from "./_app";

import styles from "../styles/debug.module.css";
import TextTruncater from "../components/TextTruncater/TextTruncater";

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
              <TextTruncater maxLength={20}>{user.token}</TextTruncater>
            ) : (
              notSetText
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Debug;
