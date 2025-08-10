"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
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
