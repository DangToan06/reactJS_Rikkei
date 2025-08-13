function flatten<T>(a: T[][]): T[] {
  return a.reduce((res, arr) => [...res, ...arr], []);
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
