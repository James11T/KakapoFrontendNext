import { useState } from "react";

import styles from "./TextTruncator.module.css";

/*
  Component used for truncating text to a certain length
  Allows the user to expand the content to full length
  
*/

const TextTruncator = ({
  children: text = "",
  maxLength = 20,
  defaultValue = true,
}) => {
  const [isTruncated, setIsTruncated] = useState(defaultValue);

  const handleExpand = (event) => {
    setIsTruncated(false);
  };

  if (isTruncated && text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength);

    return (
      <span>
        {truncatedText}
        <span className={styles.expand} onClick={handleExpand}>
          ...
        </span>
      </span>
    );
  } else {
    return <span>{text}</span>;
  }
};

export default TextTruncator;
