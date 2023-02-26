namespace Operations1 {
  export class Multiplier implements Calculator {
    calcualtor = (num1: number, num2: number): void => {
      console.log(`Product:${num1 * num2}`);
    };

    square = (num1: number): void => {
      console.log("Power is :" + Math.pow(num1, 2));
    };
  }
}
