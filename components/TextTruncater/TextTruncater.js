import { useState } from "react";

import styles from "./TextTruncater.module.css";

const TextTruncater = ({
  children: text,
  maxLength = 20,
  defaultValue = true,
}) => {
  const [isTruncated, setIsTruncated] = useState(defaultValue);

  const handleExpand = (event) => {
    setIsTruncated(false);
  };

  if (isTruncated) {
    const truncatedText = text.substring(0, maxLength);

    return (
      <>
        {truncatedText}
        <div className={styles.expand} onClick={handleExpand}>
          ...
        </div>
      </>
    );
  } else {
    return <>{text}</>;
  }
};

export default TextTruncater;
