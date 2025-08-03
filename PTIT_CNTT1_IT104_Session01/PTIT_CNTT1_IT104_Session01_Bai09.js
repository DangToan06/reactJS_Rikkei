const mergeAndSort = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  merged.sort((a, b) => a - b);
  return merged;
};

console.log(mergeAndSort([1, 3, 5], [2, 4, 6]));
