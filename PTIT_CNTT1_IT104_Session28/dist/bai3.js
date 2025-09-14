"use strict";
const processArray = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            callBack(arr[i]);
        }, i * 1000);
    }
};
const handleProcessArray = (num) => {
    console.log("Phan tu thu: ", num);
};
processArray([5, 6, 3, 1, 7], handleProcessArray);
