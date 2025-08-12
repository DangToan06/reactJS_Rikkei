class Vehicle {
  constructor(
    protected id: string,
    protected name: string,
    protected speed: number
  ) {}

  public slowDown(speed: number): void {
    if (speed > 0) this.speed -= speed;
  }
  public speedUp(speed: number): void {
    if (speed > 0) this.speed += speed;
  }

  public showSpeed(): void {
    console.log(`Speed now: ${this.speed}`);
  }
}

class Bicycle extends Vehicle {
  constructor(id: string, name: string, speed: number, private gear: number) {
    super(id, name, speed);
  }
}

let bicy = new Bicycle("001", "xe dap thong nhat", 0, 5);

bicy.speedUp(50);
bicy.slowDown(20);

bicy.showSpeed();
