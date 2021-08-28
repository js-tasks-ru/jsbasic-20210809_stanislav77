function getMinMax(str) {
  let arrFromStr = (str.split(' ')).filter(item => isFinite(item));
  let min = Math.min.apply(null, arrFromStr);
  let max = Math.max.apply(null, arrFromStr);
  return {
    min: min,
    max: max
  };
}
