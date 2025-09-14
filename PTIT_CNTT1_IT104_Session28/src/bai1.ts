type callBackV1 = (res: number) => void;

const calculate = (a: number, b: number, callBack: callBackV1) => {
  const sum = a + b;
  callBack(sum);
};

const handleSum = (res: number) => {
  console.log(res);
};

calculate(1, 2, handleSum);
