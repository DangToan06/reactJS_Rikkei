const str1: string = "banana";
const str2: string = "hello world";

let seen: Record<string, boolean> = {};

const filterCharExist = (str: string): string => {
  let res: string = "";
  for (const char of str) {
    if (!seen[char]) {
      res += char;
      seen[char] = true;
    }
  }

  return res;
};

console.log(filterCharExist(str1));
console.log(filterCharExist(str2));
