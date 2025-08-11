abstract class Shape {
  abstract name: string;

  getName(): string {
    return this.name;
  }

  abstract getSize(): number;
}

class Rectangle extends Shape {
  name: string;
  private width: number;
  private height: number;
  constructor(name: string, width: number, height: number) {
    super();
    this.name = name;
    this.width = width;
    this.height = height;
  }

  getSize(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle("Rectangle", 10, 5);
console.log(rect.getName());
console.log(rect.getSize());
