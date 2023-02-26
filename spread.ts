var arr1 = [20, 30, 40, 50, 60];
var arr2 = [...arr1, 60, 70, 80, 90];

var employee = { name: "sikindar", salary: 20000 };
var address = { city: "nalgonda", state: "telangana" };
// use spread operator and also includes hobbies array
var person = { ...employee, ...address, hobbies: [] };
