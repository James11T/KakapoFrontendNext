import OAuthButton from "../OAuthButton/OAuthButton";

import styles from "./OAuthProviders.module.css";

const OAuthProviders = () => {
  return (
    <ul className={styles.providerButtons}>
      <li>
        <OAuthButton provider="google" />
      </li>
      <li>
        <OAuthButton provider="facebook" />
      </li>
    </ul>
  );
};

export default OAuthProviders;
