var username: string;
username = "Sikindar";
console.log(`${username}`); // ts supports template ref variable, back tick

// inferred
var message = "Have a great day";
console.log(`${username} ${message}`);

var value: string | number;
value = "nagender";
value = 10;
if (typeof value == "string") console.log(`Hello ${value}`);
else console.log(`square of number is :${value * value}`);
