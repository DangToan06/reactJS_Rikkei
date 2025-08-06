"use strict";
const str1 = "banana";
const str2 = "hello world";
let seen = {};
const filterCharExist = (str) => {
    let res = "";
    for (const char of str) {
        if (!seen[char]) {
            res += char;
            seen[char] = true;
        }
    }
    return res;
};
console.log(filterCharExist(str1));
console.log(filterCharExist(str2));
