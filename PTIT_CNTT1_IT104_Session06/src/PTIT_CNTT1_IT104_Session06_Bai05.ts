interface ChangeSpeed {
  speedUp(amount: number): void;
  slowDown(amount: number): void;
  stop(): void;
}

class Vehicle implements ChangeSpeed {
  constructor(private speed: number) {}

  public speedUp(amount: number): void {
    if (amount > 0) {
      this.speed += amount;
      console.log(
        `Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`
      );
    }
  }

  public slowDown(amount: number): void {
    if (amount > 0) {
      this.speed -= amount;
      if (this.speed < 0) this.speed = 0;
      console.log(
        `Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`
      );
    }
  }

  public stop(): void {
    this.speed = 0;
    console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
  }
}

const car = new Vehicle(0);

car.speedUp(30);
car.slowDown(10);
car.stop();
