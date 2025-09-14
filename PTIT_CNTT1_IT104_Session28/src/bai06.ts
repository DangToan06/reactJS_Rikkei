type callBackV6 = () => void;

const task1 = (callBack: callBackV6) => {
  setTimeout(() => {
    console.log("Task 1 da duoc thuc thi");
    callBack();
  }, 1000);
};

const task2 = (callBack: callBackV6) => {
  setTimeout(() => {
    console.log("Task 2 da duoc thuc thi");
    callBack();
  }, 1500);
};
const task3 = (callBack: callBackV6) => {
  setTimeout(() => {
    console.log("Task 3 da duoc thuc thi");
    callBack();
  }, 2000);
};

task1(() => {
  task2(() => {
    task3(() => {
      console.log("Hoan thanh");
    });
  });
});
