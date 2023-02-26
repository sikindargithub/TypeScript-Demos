// import individual classes
import { message, Product, greet as ngreet } from "./trial";
console.log(message);
ngreet();

var prod: Product = new Product("Pen", 10);
prod.getInfo();

// importing as a module
import * as mymodule from "./trial";
console.log(mymodule.message);
mymodule.greet();

// given an alias name
var prod = new mymodule.Product("Marker", 20);
prod.getInfo();

let greet = () => {
  console.log(`Hi Nagender`);
};
