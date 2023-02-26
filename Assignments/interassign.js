var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCalc = /** @class */ (function () {
    function BasicCalc() {
        this.sum = function (x, y) {
            console.log("Sum:".concat(x + y));
        };
        this.product = function (x, y) {
            console.log("Product:".concat(x * y));
        };
    }
    return BasicCalc;
}());
var SciCalc = /** @class */ (function (_super) {
    __extends(SciCalc, _super);
    function SciCalc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.square = function (x) {
            console.log("Square:".concat(x * x));
        };
        _this.cube = function (x) {
            console.log("Cube:".concat(Math.pow(x, 3)));
        };
        return _this;
    }
    return SciCalc;
}(BasicCalc));
var sci = new SciCalc();
sci.sum(2, 3);
sci.product(4, 5);
sci.square(2);
sci.cube(3);
