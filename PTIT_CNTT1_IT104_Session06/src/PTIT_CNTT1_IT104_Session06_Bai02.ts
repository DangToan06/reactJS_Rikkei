abstract class job {
  abstract type: string;

  printType(): void {
    console.log(this.type);
  }

  abstract calculateSalary(): number;
}

class PartimeJob extends job {
  type: string;
  private workingHour: number;
  constructor(workingHour: number, type: string) {
    super();
    this.type = type;
    this.workingHour = workingHour;
  }

  calculateSalary(): number {
    return this.workingHour * 30000;
  }
}

class FulltimeJob extends job {
  type: string;
  constructor(type: string) {
    super();
    this.type = type;
  }

  calculateSalary(): number {
    return 10000000;
  }
}

const cv1 = new PartimeJob(5, "seller");
const cv2 = new FulltimeJob("CEO");

const salary1 = cv1.calculateSalary();
const salary2 = cv2.calculateSalary();

console.log(
  `salary full time ${salary2.toLocaleString(
    "vi-VN"
  )} salary parttime ${salary1.toLocaleString("vi-VN")}`
);
