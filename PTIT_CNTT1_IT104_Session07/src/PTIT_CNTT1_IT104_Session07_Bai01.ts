class Employee {
  constructor(
    public name: string,
    protected company: string,
    private phone: string
  ) {}

  public printInfo(): void {
    console.log(
      `Name person: ${this.name} || Company: ${this.company} || Phone: ${this.phone}`
    );
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    company: string,
    phone: string,
    public teamSize: string
  ) {
    super(name, company, phone);
  }
}

