import { useEffect, useState } from "react";
import { useUser } from "../hooks/user";

import TextTruncator from "../components/TextTruncator/TextTruncator";
import LoadingIcon from "../components/LoadingIcon/LoadingIcon";

import styles from "../styles/debug.module.css";
import YesNoBool from "../components/YesNoBool/YesNoBool";
import { getApiPing } from "../utils/api";

const notSetText = "Not set";

const Debug = () => {
  const { user } = useUser();
  const [apiPing, setapiPing] = useState(-1);
  const [isWaiting, setIsWaiting] = useState(false);

  const checkApiStatus = async () => {
    setIsWaiting(true);
    const apiPing = await getApiPing();
    setIsWaiting(false);
    setapiPing(apiPing);
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
              <div className={styles.apiResponseResult}>
                <LoadingIcon isLoading={isWaiting} />
                <YesNoBool colored={true}>{apiPing > 0}</YesNoBool>
                <span className={styles.mutedResult}>
                  ({apiPing > 0 ? Math.floor(apiPing) : "0"}ms)
                </span>
              </div>
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
              <p>
                <YesNoBool>{user.isAuthenticated}</YesNoBool>
              </p>
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
