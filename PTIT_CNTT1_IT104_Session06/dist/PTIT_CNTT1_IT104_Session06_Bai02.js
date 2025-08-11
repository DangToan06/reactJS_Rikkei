"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class job {
    printType() {
        console.log(this.type);
    }
}
class PartimeJob extends job {
    type;
    workingHour;
    constructor(workingHour, type) {
        super();
        this.type = type;
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FulltimeJob extends job {
    type;
    constructor(type) {
        super();
        this.type = type;
    }
    calculateSalary() {
        return 10000000;
    }
}
const cv1 = new PartimeJob(5, "seller");
const cv2 = new FulltimeJob("CEO");
const salary1 = cv1.calculateSalary();
const salary2 = cv2.calculateSalary();
console.log(`salary full time ${salary2.toLocaleString("vi-VN")} salary parttime ${salary1.toLocaleString("vi-VN")}`);
