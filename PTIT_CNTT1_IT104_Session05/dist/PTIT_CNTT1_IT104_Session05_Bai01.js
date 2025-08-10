"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
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
    console.log(`Ten xe: ${vehicles[i].name} || Nam sx: ${vehicles[i].year} || Hang xe: ${vehicles[i].company}`);
}
