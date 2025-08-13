"use strict";
function findElement(arr, value) {
    return arr.find((e) => e === value);
}
console.log(findElement([1, 3, 4, 5, 6], 5));
console.log(findElement(["apple", "banana", "orange", "tomato"], "orange"));
console.log(findElement([1, 3, 4, 5, 6], 2));
