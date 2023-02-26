var username;
username = "Sikindar";
console.log("".concat(username)); // ts supports template ref variable, back tick
// inferred
var message = "Have a great day";
console.log("".concat(username, " ").concat(message));
var value;
value = "nagender";
value = 10;
if (typeof value == "string")
    console.log("Hello ".concat(value));
else
    console.log("square of number is :".concat(value * value));
