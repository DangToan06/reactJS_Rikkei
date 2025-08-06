const checkIsNumber = (num: any): boolean => {
  return !isNaN(Number(num));
};

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

const sub = (num1: number, num2: number): number => {
  return num1 - num2;
};

const multi = (num1: number, num2: number): number => {
  return num1 * num2;
};

const divide = (num1: number, num2: number): number => {
  if (num2 === 0) return 0;
  return num1 / num2;
};

const a: number = 5;
const b: number = 3;

if (checkIsNumber(a) || checkIsNumber(b)) {
  console.log("Tổng:", sum(a, b));
  console.log("Hiệu:", sub(a, b));
  console.log("Tích:", multi(a, b).toFixed(2));
  console.log("Thương:", divide(a, b));
} else {
  console.log("Khong hop le");
}

export { sum, sub, multi, divide, checkIsNumber };
