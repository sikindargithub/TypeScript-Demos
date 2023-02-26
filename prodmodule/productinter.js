"use strict";
exports.__esModule = true;
exports.showBill = exports.appliances = exports.Gadgets = void 0;
var Gadgets = /** @class */ (function () {
    function Gadgets(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.cartDetails = function (quantity) {
            console.log("Cart Details");
            console.log("item name :".concat(_this.itemName));
            console.log("total cost:".concat(_this.price * quantity));
        };
    }
    return Gadgets;
}());
exports.Gadgets = Gadgets;
exports.appliances = {
    itemName: "Pen",
    price: 10,
    cartDetails: function (quantity) {
        console.log("Cart Details");
        console.log("item name :".concat(this.itemName));
        console.log("total cost:".concat(this.price * quantity));
    }
};
var showBill = function (details, quantity) {
    details.cartDetails(quantity);
};
exports.showBill = showBill;
