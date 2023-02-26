var GenEmployee = /** @class */ (function () {
    function GenEmployee() {
        this.print = function () {
            // print the name
        };
    }
    GenEmployee.prototype.setName = function (ename) {
        this.empname = ename;
    };
    return GenEmployee;
}());
// if T is a string
var empStr = new GenEmployee();
empStr.setName("sikindar");
empStr.print();
// if T is a number
var empNum = new GenEmployee();
empNum.setName(100);
empNum.print();
// if T is a string array
var empStrArr = new GenEmployee();
empStrArr.setName(["java", "spring"]);
empStrArr.print();
// if T is a number array
var empNumArr = new GenEmployee();
empNumArr.setName([10, 20]);
empNumArr.print();
// if T is an object array
var empObj = new GenEmployee();
empObj.setName({ name: "Nagender", city: "Nalgonda" });
empObj.print();
