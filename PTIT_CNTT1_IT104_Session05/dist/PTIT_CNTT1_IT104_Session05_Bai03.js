"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Ten: ${this.name} || SDT: ${this.phone} || Ten cong ty: ${this.company}`);
    }
}
const employee = new Employee("Hoang", "Cong ty A", "0987654321");
employee.printInfo();
