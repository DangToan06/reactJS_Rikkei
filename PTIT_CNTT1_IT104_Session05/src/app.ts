class Animal {
  private name: string;
  protected age: number;
  public species: string;
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  speak(): void {
    console.log("Animal sound");
  }
  getName(): string {
    return this.name;
  }
  setName(newName: string) {
    this.name = newName;
  }
  getAge(): number {
    return this.age;
  }
  setAge(newAge: number) {
    this.age = newAge;
  }
}

class Dog extends Animal {
  public breed: string;
  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }
  speak(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  public breed: string;
  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }
  speak(): void {
    console.log("Meow");
  }
}

class Rabbit extends Animal {
  public breed: string;
  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }
  speak(): void {
    console.log("Squeak");
  }
}
