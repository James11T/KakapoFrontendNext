import classNames from "classnames";

import Icon from "../Icon/Icon";

import styles from "./TextBox.module.css";

const TextBox = ({
  label,
  placeholder,
  icon,
  onChange,
  className,
  password: isPassword,
}) => {
  const handleOnChange = (event) => {
    onChange && onChange(event);
  };

  return (
    <div className={classNames(styles.textBox, className)}>
      {label && <span className={styles.label}>{label}</span>}
      {icon && <Icon className={styles.inputIcon}>{icon}</Icon>}
      <input
        placeholder={placeholder}
        className={classNames({ [styles.inputWithIcon]: !!icon })}
        onChange={handleOnChange}
        type={!!isPassword ? "password" : "text"}
      ></input>
    </div>
  );
};

export default TextBox;
