const checkParity = (a) => {
  if (typeof a !== "number" || isNaN(a)) {
    console.log(`${a} is not a number`);
  } else if (a % 2 === 0) {
    console.log(`${a} is an even number`);
  } else {
    console.log(`${a} is odd`);
  }
};

checkParity("a");
checkParity(10);
checkParity(7);
