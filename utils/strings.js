const yesNoBool = (bool, capitalized = true) => {
  if (capitalized) {
    return bool ? "Yes" : "No";
  }

  return bool ? "yes" : "no";
};

export { yesNoBool };
