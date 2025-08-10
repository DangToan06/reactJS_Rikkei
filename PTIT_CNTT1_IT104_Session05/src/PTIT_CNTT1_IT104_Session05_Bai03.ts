class Employee {
  public name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(): void {
    console.log(
      `Ten: ${this.name} || SDT: ${this.phone} || Ten cong ty: ${this.company}`
    );
  }
}

const employee = new Employee("Hoang", "Cong ty A", "0987654321");

employee.printInfo();
