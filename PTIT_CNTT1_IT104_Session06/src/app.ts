interface Animal {
  name: string;
  age: number;
  category: string;

  sound(): string;
  getDetail(): string;
  move(): void;
  feed(): void;
}

abstract class Animal implements Animal {
  name: string;
  age: number;
  category: string;
  foodType: string;
  constructor(name: string, age: number, category: string, foodType: string) {
    this.name = name;
    this.age = age;
    this.category = category;
    this.foodType = foodType;
  }

  getDetail(): string {
    return `Name: ${this.name} || Age: ${this.age} || Category: ${this.category} || Food Type: ${this.foodType}`;
  }

  abstract sound(): string;
  abstract move(): void;
  abstract feed(): void {
    console.log(`Name: ${this.name} || Eating: ${this.foodType}`);
  }
}

class Mammal extends Animal {
  furColor: string;

  constructor(
    name: string,
    age: number,
    category: string,
    foodType: string,
    furColor: string
  ) {
    super(name, age, category, foodType);
    this.furColor = furColor;
  }
  move(): void {
    console.log("Bach Bach");
  }
}

class Bird extends Animal {
  wingSpan: number;

  constructor(
    name: string,
    age: number,
    category: string,
    foodType: string,
    furColor: string,
    wingSpan: number
  ) {
    super(name, age, category, foodType);
    this.wingSpan = wingSpan;
  }

  move(): void {
    console.log("Flying");
  }
}
