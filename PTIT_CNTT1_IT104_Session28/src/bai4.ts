type callBackV4 = (num: number) => void;

const displayNumber = (n: number, callBack: callBackV3) => {
  setInterval(() => {
    callBack(n++);
  }, 1000);
};

const handleDisplayNumber = (num: number) => {
  console.log("So thu tu: ", num);
};

displayNumber(1, handleDisplayNumber);
