"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    name;
    width;
    height;
    constructor(name, width, height) {
        super();
        this.name = name;
        this.width = width;
        this.height = height;
    }
    getSize() {
        return this.width * this.height;
    }
}
const rect = new Rectangle("Rectangle", 10, 5);
console.log(rect.getName());
console.log(rect.getSize());
