import { useState } from "react";

import Icon from "../Icon/Icon";

import styles from "./CheckBox.module.css";

/* 

  Custom styled check box

  Features:
   - Default Value
   - Focus Indicator
   - Checked Text

  Callbacks:
   - onChange
   - onInput

  Use:
   <CheckBox onChange={callback} onInput={callback} focusIcon={true / false} checkedText="I am on">Check Box text here</CheckBox>

*/

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
      {focusIcon && <Icon className={styles.focusIcon}>right</Icon>}
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
        <Icon className={styles.checkIcon}>check</Icon>
      </span>
    </label>
  );
};

export default CheckBox;
