"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name animal: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("gau gau");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("meo meo");
    }
}
const dog = new Dog("mic");
const cat = new Cat("miu");
dog.printName();
dog.makeNoise();
cat.printName();
cat.makeNoise();
