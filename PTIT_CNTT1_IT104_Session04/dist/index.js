"use strict";
const students = [];
const createStudent = (student) => {
    students.push(student);
};
const updateStudent = (id, newStudent) => {
    const findStudent = students.findIndex((st) => st.id === id);
    if (!findStudent) {
        console.log("Not finding student");
    }
    else {
        students[findStudent].name = newStudent.name;
        students[findStudent].age = newStudent.age;
        students[findStudent].subject = newStudent.subject;
    }
};
const deleteStudent = (id) => {
    const findStudent = students.findIndex((st) => st.id === id);
    if (findStudent != -1) {
        students.splice(findStudent, 1);
    }
    else {
        console.log("Not finding student");
    }
};
const isNumber = (score) => {
    return typeof score === "number";
};
const converScoreToNumber = (score) => {
    const scoreMap = {
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    };
    return scoreMap[score];
};
const calculaAvg = (student) => {
    const total = student.subject.reduce((sum, subject) => {
        if (isNumber(subject.score)) {
            return sum + subject.score;
        }
        else {
            return sum + Number(converScoreToNumber(subject.score));
        }
    }, 0);
    return total / student.subject.length;
};
const ranking = (student) => {
    if (calculaAvg(student) >= 8.5) {
    }
    // con lai
};
