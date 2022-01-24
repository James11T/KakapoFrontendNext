import classNames from "classnames";

import Icon from "../Icon/Icon";

import styles from "./Button.module.css";

const Button = ({
  children,
  icon,
  className,
  onClick,
  focusIcon,
  type = "button",
}) => {
  const handleOnClick = (event) => {
    onClick && onClick(event);
  };

  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleOnClick}
      type={type}
    >
      {focusIcon && <Icon className={styles.focusIcon}>right</Icon>}
      {icon && <Icon className={styles.buttonIcon}>{icon}</Icon>}
      {children}
    </button>
  );
};

export default Button;
