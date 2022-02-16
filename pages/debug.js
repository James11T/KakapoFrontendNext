import { useEffect, useState } from "react";
import { useUser } from "../hooks/user";

import TextTruncator from "../components/TextTruncator/TextTruncator";

import styles from "../styles/debug.module.css";
import { yesNoBool } from "../utils/strings";
import { isApiResponding } from "../utils/api";

const notSetText = "Not set";

const Debug = () => {
  const { user } = useUser();
  const [isApiOnline, setApiOnline] = useState(false);

  const checkApiStatus = async () => {
    const isResponding = await isApiResponding();
    setApiOnline(isResponding);
  };

  useEffect(() => {
    // Check status every 3000ms
    const interval = setInterval(checkApiStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.debug}>
        <h2>API</h2>
        <div>
          <ul>
            <li>
              <h4>Is responding</h4>
              <p>{yesNoBool(isApiOnline, true, true)}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.debug}>
        <h2>Current User</h2>
        <div>
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
              <p>{yesNoBool(user.isAuthenticated)}</p>
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
      </div>
    </>
  );
};

export default Debug;
