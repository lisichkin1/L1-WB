// Базовый класс Shape (фигура)
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error('Абстрактный класс не может быть создан.');
    }
  }

  // Метод для расчета площади
  calculateArea() {
    throw new Error('Метод должен быть в подклассах.');
  }

  // Метод для расчета периметра
  calculatePerimeter() {
    throw new Error('Метод должен быть в подклассах.');
  }
}

// Подкласс прямоугольника
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Переопределение метода для расчета площади прямоугольника
  calculateArea() {
    return this.width * this.height;
  }

  // Переопределение метода для расчета периметра прямоугольника
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Подкласс круга
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Переопределение метода для расчета площади круга
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Переопределение метода для расчета периметра круга
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Подкласс треугольника
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  // Переопределение метода для расчета площади треугольника
  calculateArea() {
    // Используем формулу Герона для расчета площади треугольника по длинам его сторон
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }

  // Переопределение метода для расчета периметра треугольника
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Пример использования классов
const rectangle = new Rectangle(5, 10);
console.log('Площадь прямоугольника:', rectangle.calculateArea());
console.log('Периметр прямоугольника:', rectangle.calculatePerimeter());

const circle = new Circle(7);
console.log('Площадь круга:', circle.calculateArea());
console.log('Периметр круга:', circle.calculatePerimeter());

const triangle = new Triangle(3, 4, 5);
console.log('Площадь треугольника:', triangle.calculateArea());
console.log('Периметр треугольника:', triangle.calculatePerimeter());
