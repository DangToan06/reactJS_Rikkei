class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName;
  }
}

let allStudents: Student[] = [];

class Classroom {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  showStudents(): void {
    if (this.students.length === 0) {
      console.log("Không có học sinh trong lớp.");
    } else {
      console.log("Danh sách học sinh trong lớp:");
      this.students.forEach((student) => {
        console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
      });
    }
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  filterStudent(id: number): Student[] {
    return this.students.filter((student) => student.getId() === id);
  }

  addStudentInClass(id: number): void {
    const index = allStudents.findIndex((student) => student.getId() === id);
    if (index !== -1) {
      this.students.push(allStudents[index]);
      allStudents.splice(index, 1);
    } else {
      console.log(`Không tìm thấy học sinh có ID = ${id} trong allStudents`);
    }
  }

  removeStudent(id: number): void {
    const index = this.students.findIndex((student) => student.getId() === id);
    if (index !== -1) {
      const removedStudent = this.students.splice(index, 1)[0];
      allStudents.push(removedStudent);
      console.log(`Đã xóa học sinh ID ${id} và đưa trở lại allStudents.`);
    } else {
      console.log(`Không tìm thấy học sinh có ID = ${id} trong lớp.`);
    }
  }

  editStudent(id: number, newName: string): void {
    const student = this.students.find((student) => student.getId() === id);
    if (student) {
      student.setName(newName);
      console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
    } else {
      console.log(`Không tìm thấy học sinh có ID = ${id} trong lớp.`);
    }
  }
}

allStudents.push(
  new Student(1, "An"),
  new Student(2, "Bình"),
  new Student(3, "Chi"),
  new Student(4, "Dung"),
  new Student(5, "Huy"),
  new Student(6, "Lan")
);

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("=== Lớp A ban đầu ===");
classA.showStudents();

console.log("=== Lớp B ban đầu ===");
classB.showStudents();

classA.removeStudent(2);
console.log("=== Lớp A sau khi xóa ID 2 ===");
classA.showStudents();
console.log("=== allStudents sau khi xóa ID 2 ===", allStudents);

classB.editStudent(5, "Huy Hoàng");
console.log("=== Lớp B sau khi sửa ID 5 ===");
classB.showStudents();
