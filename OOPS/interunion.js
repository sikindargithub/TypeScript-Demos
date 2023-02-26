// for understanding
var MobielImpl = /** @class */ (function () {
    function MobielImpl() {
        this.charging = function () {
            console.log("Charging...");
        };
    }
    MobielImpl.prototype.call = function () {
        console.log("Calling...");
    };
    return MobielImpl;
}());
// this method return an interface reference
var gadgetDet = function () {
    return new MobielImpl();
};
var mob = gadgetDet();
mob.call();
mob.charging();
// this method returns union of inteface reference
var itemDetails = function () {
    return {
        charging: function () { return console.log("charging..."); },
        call: function () { return console.log("calling..."); },
        work: function () { return console.log("working"); }
    };
};
var mob1 = itemDetails();
mob1.call();
mob1.work();
mob1.charging();
