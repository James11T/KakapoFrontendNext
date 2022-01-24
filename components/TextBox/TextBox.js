import classNames from "classnames";

import Icon from "../Icon/Icon";

import styles from "./TextBox.module.css";

const TextBox = ({
  label,
  placeholder,
  icon,
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
      {icon && <Icon className={styles.inputIcon}>{icon}</Icon>}
      {focusIcon && <Icon className={styles.focusIcon}>right</Icon>}
      <input
        placeholder={placeholder}
        className={classNames({ [styles.inputWithIcon]: !!icon })}
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
