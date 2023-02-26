"use strict";
// refer the namespace
/// <reference path="./opdemo1.ts" />
var Operations2;
// refer the namespace
/// <reference path="./opdemo1.ts" />
(function (Operations2) {
    class Adder {
        constructor() {
            this.calcualtor = (num1, num2) => {
                console.log(`Sum :${num1 + num2}`);
            };
        }
    }
    Operations2.Adder = Adder;
})(Operations2 || (Operations2 = {}));
var Operations1;
(function (Operations1) {
    class Multiplier {
        constructor() {
            this.calcualtor = (num1, num2) => {
                console.log(`Product:${num1 * num2}`);
            };
            this.square = (num1) => {
                console.log("Power is :" + Math.pow(num1, 2));
            };
        }
    }
    Operations1.Multiplier = Multiplier;
})(Operations1 || (Operations1 = {}));
/// <reference path="./opdemo1.ts" />
/// <reference path="./opdemo2.ts" />
let performOperation = (calc, x, y) => {
    calc.calcualtor(x, y);
};
let calc = new Operations2.Adder();
calc.calcualtor(10, 20);
let calc2 = new Operations1.Multiplier();
calc2.calcualtor(20, 30);
calc2.square(12);
