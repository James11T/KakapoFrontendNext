import classNames from "classnames";

import styles from "./OAuthButton.module.css";

const providers = {
  google: {
    icon: "/logos/google.svg",
    text: "Sign in with Google",
    href: "/api/v1/auth/google",
    name: "Google",
    disabled: false,
  },
  apple: {
    icon: "/logos/apple.svg",
    text: "Sign in with Apple",
    href: "#",
    name: "Apple",
    disabled: true,
  },
  facebook: {
    icon: "/logos/facebook.svg",
    text: "Sign in with Facebook",
    href: "#",
    name: "Facebook",
    disabled: true,
  },
};

const OAuthButton = ({ provider = "google", hideText = false }) => {
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
        {hideText || providerData.text}
      </a>
    </div>
  );
};

export default OAuthButton;
