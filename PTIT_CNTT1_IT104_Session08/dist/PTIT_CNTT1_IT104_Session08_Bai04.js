"use strict";
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const person = { name: "Toàn", age: 19 };
const job = { title: "Developer", salary: 2000 };
const result = mergeObj(person, job);
console.log(result);
