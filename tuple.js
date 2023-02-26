var mixed = ["hello", 10, 90.5];
var mix_tuple = [];
mix_tuple[0] = "sikindar";
mix_tuple[1] = 12;
mix_tuple[2] = 15.4;
console.log(mix_tuple[4]);
console.log(mix_tuple[2]);
console.log(mix_tuple.length);
// destructing tuples
var mixnums = [10, "hello"];
var [x, y] = mixnums;
var [y, z, x] = mixnums;
console.log(x);
