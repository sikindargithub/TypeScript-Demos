/// <reference path="./opdemo1.ts" />
/// <reference path="./opdemo2.ts" />

let performOperation = (
  calc: Operations1.Calculator,
  x: number,
  y: number
): void => {
  calc.calcualtor(x, y);
};

let calc: Operations1.Calculator = new Operations2.Adder();
calc.calcualtor(10, 20);
let calc2: Operations1.Multiplier = new Operations1.Multiplier();
calc2.calcualtor(20, 30);
calc2.square(12);
