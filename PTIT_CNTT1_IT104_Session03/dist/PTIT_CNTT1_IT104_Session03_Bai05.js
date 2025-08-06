"use strict";
let fistName = "john";
let lastName = "doe";
let fullName;
const toUpperFirstChar = (str) => {
    if (str.length === 0)
        return str;
    return str[0].toUpperCase() + str.slice(1);
};
fistName = toUpperFirstChar(fistName);
lastName = toUpperFirstChar(lastName);
fullName = fistName + " " + lastName;
console.log(fullName);
