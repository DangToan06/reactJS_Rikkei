const str: string = "hello world apple banana orange pumpkin cucumber";
let arrWord: Array<string> = str.split(" ");

let arrRes: Array<string> = [];

for (let i = 0; i < arrWord.length; i++) {
  let visited: Record<string, boolean> = {};
  let check: boolean = false;
  for (let j = 0; j < arrWord[i].length; j++) {
    if (visited[arrWord[i][j]]) {
      check = true;
      break;
    }
    visited[arrWord[i][j]] = true;
  }
  if (!check) {
    arrRes.push(arrWord[i]);
  }
}

let maxLength: number = arrRes[0].length;
let flag: string = arrRes[0];

for (const word of arrRes) {
  if (word.length > maxLength) {
    flag = word;
  }
}

console.log(flag);
