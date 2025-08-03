const insertArrayAt = (arr1, arr2, position) => {
  if (position < 0 || position > arr1.length) {
    console.log("Vị trí không hợp lệ!");
    return;
  }

  const result = [...arr1.slice(0, position), ...arr2, ...arr1.slice(position)];

  console.log(result);
};

insertArrayAt([1, 2, 3, 7, 8], [4, 5, 6], 3);
insertArrayAt(["a", "b", "e", "f"], ["c", "d"], 2);
insertArrayAt([1, 2], [3, 4], -1);
