var _a, _b, _c, _d, _e, _f, _g, _h;
import { sum, sub, multi, divide, } from "./PTIT_CNTT1_IT104_Session03_Bai08.js";
const power = (base, exponent) => {
    return Math.pow(base, exponent);
};
const sqrt = (base, root) => {
    if (base < 0 && root % 2 === 0)
        throw new Error("Khong the lay can bac chac cua so am");
    return Math.pow(base, 1 / root);
};
const factorial = (n) => {
    if (n < 0) {
        throw new Error("Giai thua kong the la so am");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Giai thua phai la so nguyen");
    }
    if (n === 0 || n === 1)
        return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
let result = document.getElementById("result");
function getNumber() {
    const firNum = Number(document.getElementById("num1").value) || 0;
    const secNum = Number(document.getElementById("num2").value) || 0;
    return { firNum, secNum };
}
(_a = document.getElementById("calcAdd")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = sum(firNum, secNum);
    result.textContent = `${firNum} + ${secNum} = ${resValue}`;
});
(_b = document.getElementById("calcSub")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = sub(firNum, secNum);
    result.textContent = `${firNum} - ${secNum} = ${resValue}`;
});
(_c = document.getElementById("calcMulti")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = multi(firNum, secNum);
    result.textContent = `${firNum} * ${secNum} = ${resValue}`;
});
(_d = document.getElementById("calcDivide")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = divide(firNum, secNum);
    result.textContent = `${firNum} / ${secNum} = ${resValue}`;
});
(_e = document.getElementById("calcPow")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = power(firNum, secNum);
    result.textContent = `${firNum} ^ ${secNum} = ${resValue}`;
});
(_f = document.getElementById("calcSqrt")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = divide(firNum, secNum);
    result.textContent = `${firNum} ^ 1/${secNum} = ${resValue}`;
});
(_g = document.getElementById("calcFactorialFi")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = factorial(firNum);
    result.textContent = `${firNum}! = ${resValue}`;
});
(_h = document.getElementById("calcFactoriaSec")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", () => {
    const { firNum, secNum } = getNumber();
    let resValue = factorial(secNum);
    result.textContent = `${secNum}! = ${resValue}`;
});
