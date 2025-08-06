import {
  sum,
  sub,
  multi,
  divide,
  checkIsNumber,
} from "./PTIT_CNTT1_IT104_Session03_Bai08.js";

const power = (base: number, exponent: number): number => {
  return Math.pow(base, exponent);
};

const sqrt = (base: number, root: number): number => {
  if (base < 0 && root % 2 === 0)
    throw new Error("Khong the lay can bac chac cua so am");
  return Math.pow(base, 1 / root);
};

const factorial = (n: number): number => {
  if (n < 0) {
    throw new Error("Giai thua kong the la so am");
  }
  if (!Number.isInteger(n)) {
    throw new Error("Giai thua phai la so nguyen");
  }

  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

let result = document.getElementById("result");

function getNumber() {
  const firNum: number =
    Number((document.getElementById("num1") as HTMLInputElement).value) || 0;
  const secNum =
    Number((document.getElementById("num2") as HTMLInputElement).value) || 0;
  return { firNum, secNum };
}

document.getElementById("calcAdd")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = sum(firNum, secNum);
  result!.textContent = `${firNum} + ${secNum} = ${resValue}`;
});

document.getElementById("calcSub")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = sub(firNum, secNum);
  result!.textContent = `${firNum} - ${secNum} = ${resValue}`;
});

document.getElementById("calcMulti")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = multi(firNum, secNum);
  result!.textContent = `${firNum} * ${secNum} = ${resValue}`;
});

document.getElementById("calcDivide")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = divide(firNum, secNum);
  result!.textContent = `${firNum} / ${secNum} = ${resValue}`;
});

document.getElementById("calcPow")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = power(firNum, secNum);
  result!.textContent = `${firNum} ^ ${secNum} = ${resValue}`;
});

document.getElementById("calcSqrt")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = divide(firNum, secNum);
  result!.textContent = `${firNum} ^ 1/${secNum} = ${resValue}`;
});

document.getElementById("calcFactorialFi")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = factorial(firNum);
  result!.textContent = `${firNum}! = ${resValue}`;
});

document.getElementById("calcFactoriaSec")?.addEventListener("click", () => {
  const { firNum, secNum } = getNumber();
  let resValue = factorial(secNum);
  result!.textContent = `${secNum}! = ${resValue}`;
});
