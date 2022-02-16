import classNames from "classnames";

import styles from "./OAuthButton.module.css";

const PROVIDER_PREFIX = "Continue with ";

const providers = {
  google: {
    icon: "/logos/google.svg",
    href: "/api/v1/auth/google",
    name: "Google",
    disabled: false,
  },
  facebook: {
    icon: "/logos/facebook.svg",
    href: "/api/v1/auth/facebook",
    name: "Facebook",
    disabled: false,
  },
};

const OAuthButton = ({ provider, hideText = false }) => {
  const providerData = providers[provider];

  return (
    <div
      className={classNames(
        styles.providerButton,
        providerData.disabled && styles.disabled
      )}
    >
      <a href={providerData.href} role="button">
        <img alt={`${providerData.name} sign-in`} src={providerData.icon} />
        {hideText || `${PROVIDER_PREFIX} ${providerData.name}`}
      </a>
    </div>
  );
};

export default OAuthButton;
