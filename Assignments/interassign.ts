interface Calculator {
  sum: (x: number, y: number) => void;
  product(x: number, y: number): void;
}
class BasicCalc implements Calculator {
  sum = (x: number, y: number): void => {
    console.log(`Sum:${x + y}`);
  };
  product = (x: number, y: number): void => {
    console.log(`Product:${x * y}`);
  };
}

interface Scientific extends Calculator {
  square: (x: number) => void;
  cube(x: number): void;
}
class SciCalc extends BasicCalc implements Scientific {
  square = (x: number): void => {
    console.log(`Square:${x * x}`);
  };
  cube = (x: number): void => {
    console.log(`Cube:${Math.pow(x, 3)}`);
  };
}

let sci: Scientific = new SciCalc();
sci.sum(2, 3);
sci.product(4, 5);
sci.square(2);
sci.cube(3);
