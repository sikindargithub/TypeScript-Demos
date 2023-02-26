function greet(uname: string): void {
  console.log(`Have a great day ${uname}`);
}

var calcSum = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(`Sum is`, calcSum(10, 20));

greet("sikindar");

// lamda or arrow
var calcSum = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(`Sum is`, calcSum(10, 20));

function findTotal(...values: number[]): void {
  let sum = 0;
  values.forEach((value) => (sum += value));
  console.log(`Sum`, sum);
}

findTotal(10, 20, 30, 40);
findTotal(10, 20, 30);
findTotal(10, 20);

// to compile use
// tsc --target es6 filename
function findNames(...names: string[]) {
  // check if the name contains 'e'
  // if so push it to new array
  // iterate the new array and print the names
  let newNames: string[] = [];
  names.forEach((value) => {
    if (value.includes("e")) newNames.push(value);
  });
  newNames.forEach((value) => console.log(`${value}`));
}

findNames("Priya", "Rakesh", "George", "Helen");
