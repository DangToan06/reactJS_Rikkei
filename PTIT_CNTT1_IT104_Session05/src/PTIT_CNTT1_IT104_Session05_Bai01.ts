class Vehicle {
  public name: string;
  public year: number;
  public company: string;
  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }
}

const vehicles = [
  new Vehicle("o to", 2009, "Toyota"),
  new Vehicle("xe may", 2024, "Sh"),
];

for (let i = 0; i < vehicles.length; i++) {
  console.log(
    `Ten xe: ${vehicles[i].name} || Nam sx: ${vehicles[i].year} || Hang xe: ${vehicles[i].company}`
  );
}
