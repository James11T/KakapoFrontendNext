import { useState } from "react";

import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import CheckRounded from "@mui/icons-material/CheckRounded";

import styles from "./CheckBox.module.css";

const CheckBox = ({
  children,
  defaultValue,
  onInput,
  onChange,
  checkedText,
  focusIcon,
  name,
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
    <label className={styles.checkBox} htmlFor={name}>
      {focusIcon && <KeyboardArrowRightRounded className={styles.focusIcon} />}
      {!!checkedText && isChecked ? checkedText : children}
      <input
        type="checkbox"
        onInput={handleOnInput}
        onChange={handleOnChange}
        defaultChecked={defaultValue ? "checked" : "unchecked"}
        name={name}
        id={name}
      />
      <span className={styles.checkBoxBorder}>
        <CheckRounded className={styles.checkIcon} />
      </span>
    </label>
  );
};

export default CheckBox;
