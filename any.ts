var printData = (data: any) => {
  if (typeof data == "string") console.log(`Hello ${data}`);
  else if (typeof data == "number") console.log(`square is ${data * data}`);
  else if (Array.isArray(data)) {
    data.forEach((data) => {
      if (typeof data == "number") {
        if (data % 2 == 0) console.log(`${data}`);
      } else if (typeof data == "string") {
        if (data.includes("p")) console.log(`${data}`);
      }
    });
  } else if (typeof data == "object") {
    for (const key in data) {
      console.log(`${key} ${data[key]}`);
    }
  }
};

printData("sikindar"); //Hello sikindar
printData(10); //square is 1oo
printData(["apple", "orange", "pineapple"]); // print fruits having 'p'
printData([1, 2, 3, 4, 5, 6, 7, 8, 9]); // print only even numbers
printData({ name: "George", city: "Hyderabad" }); // print the object
