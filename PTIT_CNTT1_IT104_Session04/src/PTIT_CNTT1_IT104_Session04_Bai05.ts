interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type StaffMember = Person & Employee;

const printStaffMemberInfo = (memeber: StaffMember): void => {
  const { name, age, employeeId, department } = memeber;

  console.log(
    `${name} (${age}), Ma nhan vien ${employeeId} - Phong: ${department}`
  );
};

const employ1: StaffMember = {
  name: "Nguyen Van A",
  age: 28,
  employeeId: "EMP001",
  department: "Ke toan",
};

printStaffMemberInfo(employ1);
