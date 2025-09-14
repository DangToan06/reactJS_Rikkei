type callBackV2 = (res: number) => void;

const delayCallback = (sec: number, callBack: callBackV2) => {
  setTimeout(() => {
    callBack(sec);
  }, sec);
};

const handleSec = (sec: number) => {
  console.log("Du lieu duoc lay ra sau: ", sec, "giay");
};

delayCallback(5, handleSec);
