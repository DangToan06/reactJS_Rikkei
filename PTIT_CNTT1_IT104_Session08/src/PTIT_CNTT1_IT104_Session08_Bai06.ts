function findElement<T>(arr: T[], value: T): T | undefined {
  return arr.find((e) => e === value);
}

console.log(findElement([1, 3, 4, 5, 6], 5));
console.log(findElement(["apple", "banana", "orange", "tomato"], "orange"));
console.log(findElement([1, 3, 4, 5, 6], 2));
