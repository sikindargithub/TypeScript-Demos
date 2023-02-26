class GenEmployee<T> {
  private empname: T;
  setName(ename: T) {
    this.empname = ename;
  }

  print = () => {
    // print the name
  };
}

// if T is a string
let empStr: GenEmployee<string> = new GenEmployee<string>();
empStr.setName("sikindar");
empStr.print();

// if T is a number
let empNum: GenEmployee<number> = new GenEmployee<number>();
empNum.setName(100);
empNum.print();

// if T is a string array
let empStrArr: GenEmployee<string[]> = new GenEmployee<string[]>();
empStrArr.setName(["java", "spring"]);
empStrArr.print();

// if T is a number array
let empNumArr: GenEmployee<number[]> = new GenEmployee<number[]>();
empNumArr.setName([10, 20]);
empNumArr.print();

// if T is an object array
let empObj: GenEmployee<Object> = new GenEmployee<Object>();
empObj.setName({ name: "Nagender", city: "Nalgonda" });
empObj.print();
