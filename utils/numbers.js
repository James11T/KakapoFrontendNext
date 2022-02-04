const levels = [
  { scale: 1, symbol: "" },
  { scale: 1000, symbol: "k" },
  { scale: 1000000, symbol: "M" },
].reverse();

const dpRound = (value, places = 2) =>
  Math.floor(value * (10 * places) + 0.5) / (10 * places);

const formatNumber = (value) => {
  const res = levels.find((level) => level.scale <= value);
  return res ? `${dpRound(value / res.scale)}${res.symbol}` : "0";
};

export { dpRound, formatNumber };
