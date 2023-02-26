// // without generics
// let addItems = (item: string[]): any[] => {
//   return new Array().concat(item);
// };

// let fruits = addItems(["apple", "orange"]);
// for (const val of fruits) {
//   console.log(val);
// }

// fruits.push("mango");
// fruits.push(100);
// fruits.forEach((fruit) => console.log(fruit));

// with generics
// creating a function of generic type
function printItems<T>(item: T[]): T[] {
  return new Array<T>().concat(item);
}

// creating an string array
let courses: string[] = ["java", "spring"];
let coursesArr: string[] = printItems(courses);
coursesArr.push("angular");

// coursesArr.push(100); // throws an error
coursesArr.forEach((course) => console.log(course));

// creating a number array
let narr = [10, 20, 30];
let numArray: number[] = printItems(narr);
numArray.push(40);
// numArray.push("sikindar");
numArray.forEach((num) => console.log(num));
