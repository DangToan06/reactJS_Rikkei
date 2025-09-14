"use strict";
const checkCondition = (status, callBack) => {
    setTimeout(() => {
        callBack(status);
    }, 1000);
};
const handleCheckCondition = (c) => {
    console.log("Dieu kien tra ve: ", c);
};
checkCondition(false, handleCheckCondition);
checkCondition(true, handleCheckCondition);
