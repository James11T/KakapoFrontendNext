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
      {label && <label className={styles.label}>{label}</label>}
      {icon && <Icon className={styles.inputIcon}>{icon}</Icon>}
      <input
        placeholder={placeholder}
        className={classNames({ [styles.inputWithIcon]: !!icon })}
        onChange={handleOnChange}
        onInput={handleOnInput}
        type={!!isPassword ? "password" : "text"}
        {...otherProps}
      ></input>
    </div>
  );
};

export default TextBox;
