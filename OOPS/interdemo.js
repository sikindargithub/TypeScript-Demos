var Square = /** @class */ (function () {
    function Square(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.greet = function (name) { return "Welcome ".concat(name); };
        this.sayHello = function (name) { return "Hello ".concat(name); };
        this.calcArea = function () { return console.log("Area ".concat(_this.x * _this.x)); };
    }
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.greet = function (name) { return "Welcome ".concat(name); };
        this.sayHello = function (name) { return "Hello ".concat(name); };
        this.calcArea = function () { return console.log("Area ".concat(_this.x * _this.x)); };
        this.perimeter = function () { return console.log("Perimeter : ".concat(2 * (_this.x + _this.y))); };
    }
    return Rectangle;
}());
var shape = new Square(10);
shape.calcArea();
console.log(shape.greet("Sikindar"));
console.log(shape.sayHello("Nagender"));
var shape1 = new Rectangle(20, 40);
shape1.calcArea();
shape1.perimeter();
// Abstraction
var printArea = function (shape) {
    console.log("Call area");
    shape.calcArea();
};
var shape2 = new Rectangle(10);
// call PrintArea by passing an object of class implementation type
printArea(shape2);
// similar to method reference in java
var sq = {
    x: 15,
    y: 20,
    z: 30,
    greet: function (name) {
        return "Hi ".concat(name);
    },
    sayHello: function (name) {
        return "Hi ".concat(name);
    },
    calcArea: function () {
        console.log("Area ".concat(this.x * this.x));
    }
};
printArea(sq);
