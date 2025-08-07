const arrNumbers: Array<number> = [
  8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3,
];

const avgArrNumber = (arrNumbers: Array<number>): number => {
  const total = arrNumbers.reduce((sum, curr) => sum + curr, 0);
  return Number((total / arrNumbers.length).toFixed(2));
};

console.log(avgArrNumber(arrNumbers));
