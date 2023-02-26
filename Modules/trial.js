"use strict";
exports.__esModule = true;
exports.Product = exports.greet = exports.message = void 0;
exports.message = "Hi sikindar";
var greet = function () {
    console.log("Great day");
};
exports.greet = greet;
var checker = function () {
    console.log("Don't export this");
    console.log("This is like a private function");
};
var Product = /** @class */ (function () {
    function Product(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.getInfo = function () {
            console.log("name :".concat(_this.itemName, ",price:").concat(_this.price));
        };
    }
    return Product;
}());
exports.Product = Product;
