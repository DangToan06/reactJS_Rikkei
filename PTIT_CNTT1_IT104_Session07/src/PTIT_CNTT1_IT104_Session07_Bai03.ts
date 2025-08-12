abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
  printName() {
    console.log(`Name animal: ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise(): void {
    console.log("gau gau");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise(): void {
    console.log("meo meo");
  }
}

const dog = new Dog("mic");
const cat = new Cat("miu");

dog.printName();
dog.makeNoise();

cat.printName();
cat.makeNoise();
