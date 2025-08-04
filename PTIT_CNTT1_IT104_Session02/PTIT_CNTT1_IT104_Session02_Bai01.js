const sum = (arr) => {
  let sumNumber = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumNumber += num;
    }
  }

  return sumNumber;
};

console.log(sum([1, 2, 3, 4, 5, 6]));
