class Rectangle {
  private _width: number;
  private _height: number;
  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  area() {
    return this._height * this._width;
  }

  perimeter() {
    return (this._height + this._width) * 2;
  }

  getterWidth() {
    return this._width;
  }

  getterHeight() {
    return this._height;
  }

  setterWidth(newWidth: number) {
    this._width = newWidth;
  }

  setterHeight(newHeight: number) {
    this._height = newHeight;
  }
}

let rectangle = new Rectangle(4, 5);

console.log(rectangle.getterHeight());
console.log(rectangle.getterWidth());
console.log(rectangle.perimeter());
console.log(rectangle.area());

console.log("Sau khi thay doi");

rectangle.setterHeight(7);
rectangle.setterWidth(9);

console.log(rectangle.getterHeight());
console.log(rectangle.getterWidth());
console.log(rectangle.perimeter());
console.log(rectangle.area());
