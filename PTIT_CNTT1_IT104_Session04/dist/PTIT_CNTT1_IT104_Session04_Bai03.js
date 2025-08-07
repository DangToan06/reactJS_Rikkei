"use strict";
const displayInfor = (student2) => {
    const { name, age, email } = student2;
    console.log(`Ten toi la ${name}, toi ${age}, va email cua toi la ${email}`);
};
const st1 = {
    name: "Joe",
    age: 9,
    email: "joe@gmail.com",
};
displayInfor(st1);
