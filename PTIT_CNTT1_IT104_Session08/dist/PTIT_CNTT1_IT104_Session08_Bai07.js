"use strict";
function flatten(a) {
    return a.reduce((res, arr) => [...res, ...arr], []);
}
console.log(flatten([
    [1, 2],
    [3, 4],
    [5, 6],
]));
