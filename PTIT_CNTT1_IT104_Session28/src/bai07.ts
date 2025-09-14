type callBackV7 = <T>(element: T, index: number, array: T[]) => void;

const myForEach = <T>(arr: T[], callBack: callBackV7) => {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
};

const handleMyForEach = <T>(element: T, index: number, array: T[]) => {
  console.log("Vi tri:", index, "| Phan tu:", element, "| Mang: ", array);
};

myForEach(["h", "e", "l", "l", "o"], handleMyForEach);
