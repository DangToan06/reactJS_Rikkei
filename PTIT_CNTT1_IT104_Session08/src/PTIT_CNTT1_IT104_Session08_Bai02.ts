function generic<T>(arg: T): T {
  return arg;
}

const check = generic<boolean>(true);
if (check) {
  console.log("xin chào");
} else {
  console.log("tạm biệt");
}
