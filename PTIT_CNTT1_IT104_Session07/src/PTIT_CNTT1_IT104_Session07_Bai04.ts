abstract class Person {
  constructor(public name: string) {}
  abstract displayInfo(): void;
}

class Student extends Person {
  constructor(name: string, private id: number) {
    super(name);
  }
  displayInfo(): void {
    console.log(`Id: ${this.id} || Name: ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(name: string, public subject: string) {
    super(name);
  }
  displayInfo(): void {
    console.log(`Name subject: ${this.subject} || Name: ${this.name}`);
  }
}

const stu = new Student("duong", 1);
const teacher = new Teacher("Quy", "React");

stu.displayInfo();
teacher.displayInfo();
