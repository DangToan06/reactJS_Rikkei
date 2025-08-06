"use strict";
const str = "hello world apple banana orange pumpkin cucumber";
let arrWord = str.split(" ");
let arrRes = [];
for (let i = 0; i < arrWord.length; i++) {
    let visited = {};
    let check = false;
    for (let j = 0; j < arrWord[i].length; j++) {
        if (visited[arrWord[i][j]]) {
            check = true;
            break;
        }
        visited[arrWord[i][j]] = true;
    }
    if (!check) {
        arrRes.push(arrWord[i]);
    }
}
let maxLength = arrRes[0].length;
let flag = arrRes[0];
for (const word of arrRes) {
    if (word.length > maxLength) {
        flag = word;
    }
}
console.log(flag);
