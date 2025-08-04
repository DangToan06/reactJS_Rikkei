const checkEndString = (string, target) => {
  return string.endsWith(target) ? true : false;
};

console.log(checkEndString("Hello, World", "Hello"));
console.log(checkEndString("Hello, World", "World"));
