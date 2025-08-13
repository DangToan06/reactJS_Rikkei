function getFirstMatch<T>(
  arr: T[],
  predicate: (item: T) => boolean
): T | undefined {
  for (const item of arr) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

const numbers = [1, 3, 5, 8, 11, 14];
const firstEven = getFirstMatch(
  numbers,
  (n) => typeof n === "number" && n % 2 === 0
);
console.log(firstEven);

const strings = ["apple", "banana", "cherry"];
const startsWithB = getFirstMatch(
  strings,
  (s) => typeof s === "number" && s % 2 === 0
);
console.log(startsWithB);
