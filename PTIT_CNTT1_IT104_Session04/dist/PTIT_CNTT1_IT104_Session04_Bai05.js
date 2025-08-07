"use strict";
const printStaffMemberInfo = (memeber) => {
    const { name, age, employeeId, department } = memeber;
    console.log(`${name} (${age}), Ma nhan vien ${employeeId} - Phong: ${department}`);
};
const employ1 = {
    name: "Nguyen Van A",
    age: 28,
    employeeId: "EMP001",
    department: "Ke toan",
};
printStaffMemberInfo(employ1);
