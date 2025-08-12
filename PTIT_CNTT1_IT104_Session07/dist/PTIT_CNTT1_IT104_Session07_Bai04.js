"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Id: ${this.id} || Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name subject: ${this.subject} || Name: ${this.name}`);
    }
}
const stu = new Student("duong", 1);
const teacher = new Teacher("Quy", "React");
stu.displayInfo();
teacher.displayInfo();
