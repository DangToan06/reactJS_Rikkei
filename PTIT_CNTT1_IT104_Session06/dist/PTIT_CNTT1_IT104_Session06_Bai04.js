"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * this.radius * Math.PI;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const cir = new Circle(4);
const rec = new Rectangle(4, 5);
const areaCir = cir.calculateArea();
const periCir = cir.calculatePerimeter();
const areaRec = rec.calculateArea();
const periRec = rec.calculatePerimeter();
console.log(`area and perimeter circle: ${areaCir.toFixed(2)} ${periCir.toFixed(2)}`);
console.log(`area and perimeter rectangle: ${areaRec} ${periRec}`);
