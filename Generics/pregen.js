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
function printItems(item) {
    return new Array().concat(item);
}
// creating an string array
var courses = ["java", "spring"];
var coursesArr = printItems(courses);
coursesArr.push("angular");
// coursesArr.push(100); // throws an error
coursesArr.forEach(function (course) { return console.log(course); });
// creating a number array
var narr = [10, 20, 30];
var numArray = printItems(narr);
numArray.push(40);
// numArray.push("sikindar");
numArray.forEach(function (num) { return console.log(num); });
