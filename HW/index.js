// 1.

//class Product {
//    constructor(name, price) {
//      this.name = name;
//      this.price = price;
//    }
//  
//    discount(discountValue) {
//      const discountedPrice = this.price * (1 - discountValue);
//      return discountedPrice;
//    }
//  }

//  const product = new Product("Zara Classic", 100);  
//  const discountedPrice = product.discount(0.2);  
//  console.log(discountedPrice);  


// 2.

//class Rectangle {
//    constructor(width, height) {
//      this.width = width;
//      this.height = height;
//    }
  
//    calculateArea() {
//      return this.width * this.height;
//    }
  
//    calculatePerimeter() {
//      return 2 * (this.width + this.height);
//    }
//  }

//const rectangle = new Rectangle(7, 5); 
//const area = rectangle.calculateArea(); 
//const perimeter = rectangle.calculatePerimeter(); 

//console.log("Площа прямокутника:", area); 
//console.log("Периметр прямокутника:", perimeter); 

// 3.

//class Client {
//    constructor(name, email) {
//      this.name = name;
//      this.email = email;
//    }
  
//    validateEmail() {
//      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//      return emailRegex.test(this.email);
//    }
//  }

//const client = new Client("Ім'я клієнта", "example@example.com"); 
//const isValidEmail = client.validateEmail(); 

//console.log("Email коректний:", isValidEmail); 

// 6.

class Shape {
    calculateArea() {
      return 0;
    }
  
    calculatePerimeter() {
      return 0;
    }
  
    showInfo() {
      console.log("Це базова фігура.");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  
    showInfo() {
      console.log(`Прямокутник: ширина - ${this.width}, висота - ${this.height}`);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  
    showInfo() {
      console.log(`Круг: радіус - ${this.radius}`);
    }
  }
  
  const rectangle = new Rectangle(2, 8);
  const circle = new Circle(5);
  
  rectangle.showInfo();
  console.log("Площа прямокутника:", rectangle.calculateArea());
  console.log("Периметр прямокутника:", rectangle.calculatePerimeter());
  
  circle.showInfo();
  console.log("Площа круга:", circle.calculateArea());
  console.log("Довжина кола:", circle.calculatePerimeter());
  


