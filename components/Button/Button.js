import classNames from "classnames";

import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

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
  icon: Icon,
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
      {focusIcon && <KeyboardArrowRightRounded className={styles.focusIcon} />}
      {Icon && <Icon className={styles.buttonIcon} />}
      {children}
    </button>
  );
};

export default Button;
