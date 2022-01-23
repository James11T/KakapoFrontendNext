import classNames from "classnames";

import Icon from "../Icon/Icon";

import styles from "./Button.module.css";

const Button = ({ children, icon, className, onClick }) => {
  const handleOnClick = (event) => {
    onClick && onClick(event);
  };

  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleOnClick}
    >
      {icon && <Icon className={styles.buttonIcon}>{icon}</Icon>}
      {children}
    </button>
  );
};

export default Button;
