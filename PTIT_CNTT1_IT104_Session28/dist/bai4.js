"use strict";
const displayNumber = (n, callBack) => {
    setInterval(() => {
        callBack(n++);
    }, 1000);
};
const handleDisplayNumber = (num) => {
    console.log("So thu tu: ", num);
};
displayNumber(1, handleDisplayNumber);
