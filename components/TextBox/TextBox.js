import classNames from "classnames";

import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

import styles from "./TextBox.module.css";

const TextBox = ({
  label,
  placeholder,
  icon: Icon,
  onChange,
  onInput,
  className,
  name,
  focusIcon,
  password: isPassword,
  ...otherProps
}) => {
  const handleOnChange = (event) => {
    onChange && onChange(event);
  };

  const handleOnInput = (event) => {
    onInput && onInput(event);
  };

  return (
    <div className={classNames(styles.textBox, className)}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      {Icon && <Icon className={styles.inputIcon} />}
      {focusIcon && <KeyboardArrowRightRounded className={styles.focusIcon} />}
      <input
        placeholder={placeholder}
        className={classNames({ [styles.inputWithIcon]: !!Icon })}
        onChange={handleOnChange}
        onInput={handleOnInput}
        name={name}
        type={!!isPassword ? "password" : "text"}
        {...otherProps}
      ></input>
    </div>
  );
};

export default TextBox;
