var Vehicle = /** @class */ (function () {
    function Vehicle(model, brand, price) {
        var _this = this;
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.getBrand = function () {
            return "Brand :".concat(_this.brand);
        };
    }
    return Vehicle;
}());
var Accessorries = /** @class */ (function () {
    function Accessorries(accName, type) {
        var _this = this;
        this.accName = accName;
        this.type = type;
        this.getAcc = function () {
            console.log("Accessory name :".concat(_this.accName));
        };
    }
    return Accessorries;
}());
var Car = /** @class */ (function () {
    function Car(model, brand, price, accName, type) {
        var _this = this;
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.accName = accName;
        this.type = type;
        this.getBrand = function () {
            return "Brand :".concat(_this.brand);
        };
        this.getAcc = function () {
            console.log("Accessory name :".concat(_this.accName));
        };
        this.getMileage = function () {
            console.log("mileage");
        };
    }
    return Car;
}());
var details = new Car("M123", "Maruthi", 500000, "Music Sytem", "Entertainment");
console.log(details.getBrand());
details.getAcc();
details.getMileage();
