System.register("productinter", [], function (exports_1, context_1) {
    "use strict";
    var Gadgets, appliances, showBill;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Gadgets = class Gadgets {
                constructor(itemName, price) {
                    this.itemName = itemName;
                    this.price = price;
                    this.cartDetails = (quantity) => {
                        console.log(`Cart Details`);
                        console.log(`item name :${this.itemName}`);
                        console.log(`total cost:${this.price * quantity}`);
                    };
                }
            };
            exports_1("Gadgets", Gadgets);
            exports_1("appliances", appliances = {
                itemName: "Pen",
                price: 10,
                cartDetails: function (quantity) {
                    console.log(`Cart Details`);
                    console.log(`item name :${this.itemName}`);
                    console.log(`total cost:${this.price * quantity}`);
                },
            });
            exports_1("showBill", showBill = (details, quantity) => {
                details.cartDetails(quantity);
            });
        }
    };
});
System.register("bill", ["productinter"], function (exports_2, context_2) {
    "use strict";
    var productinter_1, details;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (productinter_1_1) {
                productinter_1 = productinter_1_1;
            }
        ],
        execute: function () {
            details = new productinter_1.Gadgets("Pencil", 10);
            productinter_1.showBill(details, 4);
            productinter_1.showBill(productinter_1.appliances, 3);
        }
    };
});
