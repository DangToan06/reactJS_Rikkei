interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Circle implements Geometry {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return 2 * this.radius * Math.PI;
  }
}

class Rectangle implements Geometry {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const cir = new Circle(4);
const rec = new Rectangle(4, 5);

const areaCir = cir.calculateArea();
const periCir = cir.calculatePerimeter();

const areaRec = rec.calculateArea();
const periRec = rec.calculatePerimeter();

console.log(
  `area and perimeter circle: ${areaCir.toFixed(2)} ${periCir.toFixed(2)}`
);
console.log(`area and perimeter rectangle: ${areaRec} ${periRec}`);
