const yesNoBool = (bool, capitalized = true, colored = false) => {
  let output;
  if (capitalized) {
    output = bool ? "Yes" : "No";
  } else {
    output = bool ? "yes" : "no";
  }

  if (colored) {
    return <span style={{ color: bool ? "green" : "red" }}>{output}</span>;
  }
  return output;
};

export { yesNoBool };
