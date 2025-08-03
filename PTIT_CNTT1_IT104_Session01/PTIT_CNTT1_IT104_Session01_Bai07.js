const sumEachArray = (...arrays) => {
  return arrays.map((arr) => arr.reduce((acc, curr) => acc + curr, 0));
};
const result = sumEachArray([1, 2], [6, 7, 8], [12, 8]);
console.log(result);
