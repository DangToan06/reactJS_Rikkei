"use strict";
class Vehicle {
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    slowDown(speed) {
        if (speed > 0)
            this.speed -= speed;
    }
    speedUp(speed) {
        if (speed > 0)
            this.speed += speed;
    }
    showSpeed() {
        console.log(`Speed now: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(id, name, speed, gear) {
        super(id, name, speed);
        this.gear = gear;
    }
}
let bicy = new Bicycle("001", "xe dap thong nhat", 0, 5);
bicy.speedUp(50);
bicy.slowDown(20);
bicy.showSpeed();
