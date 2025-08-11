"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    category;
    foodType;
    constructor(name, age, category, foodType) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }
    getDetail() {
        return `Name: ${this.name} || Age: ${this.age} || Category: ${this.category} || Food Type: ${this.foodType}`;
    }
    feed() {
        console.log(`Name: ${this.name} || Eating: ${this.foodType}`);
    }
}
class Mammal extends Animal {
    furColor;
    constructor(name, age, category, foodType, furColor) {
        super(name, age, category, foodType);
        this.furColor = furColor;
    }
    move() {
        console.log("Bach Bach");
    }
}
class Bird extends Animal {
    wingSpan;
    constructor(name, age, category, foodType, furColor, wingSpan) {
        super(name, age, category, foodType);
        this.wingSpan = wingSpan;
    }
    move() {
        console.log("Flying");
    }
}
