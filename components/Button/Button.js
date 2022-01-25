import classNames from "classnames";

import Icon from "../Icon/Icon";

import styles from "./Button.module.css";

/* 

  Custom styled button

  Features:
   - Icon
   - Focus Indicator

  Callbacks:
   - onClick

  Use:
   <Button onClick={callback} icon="iconNameHere" focusIcon={true / false}>Button Text Here</Button>

*/

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
