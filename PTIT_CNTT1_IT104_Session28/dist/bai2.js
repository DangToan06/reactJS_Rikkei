"use strict";
const delayCallback = (sec, callBack) => {
    setTimeout(() => {
        callBack(sec);
    }, sec);
};
const handleSec = (sec) => {
    console.log("Du lieu duoc lay ra sau: ", sec, "giay");
};
delayCallback(5, handleSec);
