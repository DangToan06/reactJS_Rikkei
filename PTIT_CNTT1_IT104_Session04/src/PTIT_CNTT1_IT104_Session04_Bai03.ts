interface Student2 {
  name: string;
  age: number;
  email: string;
}

const displayInfor = (student2: Student2): void => {
  const { name, age, email } = student2;
  console.log(`Ten toi la ${name}, toi ${age}, va email cua toi la ${email}`);
};

const st1: Student2 = {
  name: "Joe",
  age: 9,
  email: "joe@gmail.com",
};

displayInfor(st1);
