import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

import styles from "./CheckBox.module.css";

const CheckBox = ({
  children,
  defaultValue,
  onInput,
  onChange,
  checkedText,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);

  const handleOnInput = (event) => {
    onInput && onInput(event);
  };

  const handleOnChange = (event) => {
    setIsChecked(!!event.target.checked);
    onChange && onChange(event);
  };

  return (
    <label className={styles.checkBox}>
      {!!checkedText && isChecked ? checkedText : children}
      <input
        type="checkbox"
        onInput={handleOnInput}
        onChange={handleOnChange}
        defaultChecked={defaultValue ? "checked" : "unchecked"}
      />
      <span className={styles.checkBoxBorder}>
        <Icon className={styles.checkIcon}>check</Icon>
      </span>
    </label>
  );
};

export default CheckBox;