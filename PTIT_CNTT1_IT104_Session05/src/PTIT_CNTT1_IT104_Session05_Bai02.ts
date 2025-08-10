class Student {
  public id: number;
  public age: number;
  public email: string;
  constructor(id: number, age: number, email: string) {
    this.id = id;
    this.age = age;
    this.email = email;
  }
}

const students = [
  new Student(1, 17, "stu1@gmail.com"),
  new Student(2, 13, "stu2@gmail.com"),
];

students.forEach((stu) => {
  console.log(stu);
});
