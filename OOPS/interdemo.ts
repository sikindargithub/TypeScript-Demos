interface Shape {
  x: number;
  y?: number;
  z?: number;
  greet(name: string): string;
  sayHello: (name: string) => string;
  calcArea: () => void;
}

class Square implements Shape {
  constructor(public x: number, public y?: number, public z?: number) {}
  greet = (name: string) => `Welcome ${name}`;
  sayHello = (name: string) => `Hello ${name}`;
  calcArea = () => console.log(`Area ${this.x * this.x}`);
}

class Rectangle implements Shape {
  constructor(public x: number, public y?: number, public z?: number) {}
  greet = (name: string) => `Welcome ${name}`;
  sayHello = (name: string) => `Hello ${name}`;
  calcArea = () => console.log(`Area ${this.x * this.x}`);
  perimeter = (): void => console.log(`Perimeter : ${2 * (this.x + this.y)}`);
}
let shape: Shape = new Square(10);
shape.calcArea();
console.log(shape.greet("Sikindar"));
console.log(shape.sayHello("Nagender"));

let shape1: Rectangle = new Rectangle(20, 40);
shape1.calcArea();
shape1.perimeter();

// Abstraction
let printArea = (shape: Shape) => {
  console.log(`Call area`);
  shape.calcArea();
};

let shape2: Shape = new Rectangle(10);
// call PrintArea by passing an object of class implementation type
printArea(shape2);

// similar to method reference in java
var sq = {
  x: 15,
  y: 20,
  z: 30,
  greet: function (name: string): string {
    return `Hi ${name}`;
  },
  sayHello: function (name: string): string {
    return `Hi ${name}`;
  },
  calcArea: function () {
    console.log(`Area ${this.x * this.x}`);
  },
};
printArea(sq);
