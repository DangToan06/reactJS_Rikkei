type callBackV3 = (num: number) => void;

const processArray = (arr: number[], callBack: callBackV3) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      callBack(arr[i]);
    }, i * 1000);
  }
};

const handleProcessArray = (num: number) => {
  console.log("Phan tu thu: ", num);
};

processArray([5, 6, 3, 1, 7], handleProcessArray);
