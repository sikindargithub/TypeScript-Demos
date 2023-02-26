// refer the namespace
/// <reference path="./opdemo1.ts" />

namespace Operations2 {
  export class Adder implements Operations1.Calculator {
    calcualtor = (num1: number, num2: number): void => {
      console.log(`Sum :${num1 + num2}`);
    };
  }
}
