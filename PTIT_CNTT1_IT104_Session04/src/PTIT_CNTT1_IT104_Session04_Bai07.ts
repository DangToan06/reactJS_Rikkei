const processInput = (input: string | boolean | number): void => {
  if (typeof input === "string") {
    if (!isNaN(Number(input))) {
      console.log(Number(input));
    } else {
      let regex = /[a-zA-Z]/g;
      let res: number = (input.match(regex) || []).length;
      console.log(`${res} ky tu`);
    }
  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("La so nguyen to");
    } else {
      console.log("Khong phai la so nguyen to");
    }
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Gia tri la true - tien hanh xu ly");
    } else {
      console.log("Gia tri la false = dung xu ly");
    }
  }
};

const isPrime = (n: number): boolean => {
  if (n < 2) return true;

  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

processInput("abc123!");
processInput(10);
processInput(true);
