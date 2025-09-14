type callBackV5 = (res: boolean) => void;

const checkCondition = (status: boolean, callBack: callBackV5) => {
  setTimeout(() => {
    callBack(status);
  }, 1000);
};

const handleCheckCondition = (c: boolean) => {
  console.log("Dieu kien tra ve: ", c);
};

checkCondition(false, handleCheckCondition);
checkCondition(true, handleCheckCondition);
