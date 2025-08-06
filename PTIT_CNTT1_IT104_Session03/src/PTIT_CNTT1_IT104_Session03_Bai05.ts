let fistName: string = "john";
let lastName: string = "doe";
let fullName: string;

const toUpperFirstChar = (str: string): string => {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
};

fistName = toUpperFirstChar(fistName);
lastName = toUpperFirstChar(lastName);

fullName = fistName + " " + lastName;

console.log(fullName);
