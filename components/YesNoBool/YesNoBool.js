import styles from "./YesNoBool.module.css";

const YesNoBool = ({ children: bool, capitalized = true, colored = false }) => {
  let output;
  if (capitalized) {
    output = bool ? "Yes" : "No";
  } else {
    output = bool ? "yes" : "no";
  }

  return (
    <span className={colored && (bool ? styles.boolGreen : styles.boolRed)}>
      {output}
    </span>
  );
};

export default YesNoBool;
