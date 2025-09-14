"use strict";
const calculate = (a, b, callBack) => {
    const sum = a + b;
    callBack(sum);
};
const handleSum = (res) => {
    console.log(res);
};
calculate(1, 2, handleSum);
