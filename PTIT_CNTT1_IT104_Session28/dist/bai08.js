"use strict";
function myFilter(arr, value, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], value)) {
            result.push(arr[i]);
        }
    }
    return result;
}
const callback = (element, value) => element === value;
console.log(myFilter([1, 2, 2, 3, 4, 5, 6, 7], 10, callback));
