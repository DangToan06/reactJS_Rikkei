type Subject = {
  subjectName: string;
  score: number | string;
};

type Student = {
  id: number;
  name: string;
  age: number | string;
  subject: Subject[];
};

const students: Array<Student> = [];

const createStudent = (student: Student): void => {
  students.push(student);
};

const updateStudent = (id: number, newStudent: Student) => {
  const findStudent = students.findIndex((st) => st.id === id);
  if (!findStudent) {
    console.log("Not finding student");
  } else {
    students[findStudent].name = newStudent.name;
    students[findStudent].age = newStudent.age;
    students[findStudent].subject = newStudent.subject;
  }
};

const deleteStudent = (id: number): void => {
  const findStudent = students.findIndex((st) => st.id === id);

  if (findStudent != -1) {
    students.splice(findStudent, 1);
  } else {
    console.log("Not finding student");
  }
};

const isNumber = (score: number | string) => {
  return typeof score === "number";
};

const converScoreToNumber = (score: string): Number => {
  const scoreMap: { [key: string]: number } = {
    A: 10,
    B: 8,
    C: 6,
    D: 4,
  };

  return scoreMap[score];
};

const calculaAvg = (student: Student) => {
  const total = student.subject.reduce((sum, subject) => {
    if (isNumber(subject.score)) {
      return sum + subject.score;
    } else {
      return sum + Number(converScoreToNumber(subject.score));
    }
  }, 0);

  return total / student.subject.length;
};

const ranking = (student: Student) => {
  if (calculaAvg(student) >= 8.5) {
  }
  // con lai
};
