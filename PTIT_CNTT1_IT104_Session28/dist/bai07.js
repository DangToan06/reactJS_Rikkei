"use strict";
const myForEach = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
};
const handleMyForEach = (element, index, array) => {
    console.log("Vi tri:", index, "| Phan tu:", element, "| Mang: ", array);
};
myForEach(["h", "e", "l", "l", "o"], handleMyForEach);
