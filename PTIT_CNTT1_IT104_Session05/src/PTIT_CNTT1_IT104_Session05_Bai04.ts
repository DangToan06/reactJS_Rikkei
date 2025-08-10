class Vehicle {
  public _name: string;
  protected _year: number;
  private _company: string;
  public readonly _id: number;
  constructor(name: string, year: number, company: string, id: number) {
    this._id = id;
    this._name = name;
    this._year = year;
    this._company = company;
  }

  printVehilce() {
    console.log(`
        ID: ${this._id}
        Name: ${this._name}
        Year: ${this._year}
        Company: ${this._company}
        `);
  }
}

const vehicle1 = new Vehicle("o to", 2009, "Toyota", 1);

vehicle1.printVehilce();

// vehicle1._id = 2;  // Khong the thya doi ve chi readonly
vehicle1._name = "xe ben"; // public thay doi duoc
