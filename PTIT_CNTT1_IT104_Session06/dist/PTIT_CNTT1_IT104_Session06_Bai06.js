"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    students;
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Không có học sinh trong lớp.");
        }
        else {
            console.log("Danh sách học sinh trong lớp:");
            this.students.forEach((student) => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter((student) => student.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex((student) => student.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID = ${id} trong allStudents`);
        }
    }
}
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Chi"), new Student(4, "Dung"), new Student(5, "Huy"), new Student(6, "Lan"));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("=== Lớp A ===");
classA.showStudents();
console.log("=== Lớp B ===");
classB.showStudents();
console.log("=== allStudents còn lại ===", allStudents);
