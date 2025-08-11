abstract class Shape {
  abstract name: string; // thuộc tính trừu tượng

  getName(): string {
    // method thường
    return this.name;
  }

  abstract getSize(): number; // abstract method
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

  // Bắt buộc override
  getSize(): number {
    return this.width * this.height;
  }
}

const r = new Rectangle("Hình chữ nhật", 5, 3);
console.log(r.getName());
console.log(r.getSize());

// Abstract method
// Chỉ khai báo tên và kiểu phương thức, không có thân hàm.
// Bắt buộc các lớp con phải viết lại (override).
// Chỉ tồn tại trong abstract class.

// Method (bình thường)
// Có thân hàm (có code thực thi).
// Lớp con có thể dùng luôn hoặc ghi đè nếu muốn.
// Có thể nằm trong bất kỳ class nào (kể cả abstract class).
