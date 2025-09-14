type CallbackV8<T> = (element: T, value: T) => boolean;

function myFilter<T>(arr: T[], value: T, callback: CallbackV8<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], value)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const callback = <T>(element: T, value: T): boolean => element === value;

console.log(myFilter([1, 2, 2, 3, 4, 5, 6, 7], 10, callback));
