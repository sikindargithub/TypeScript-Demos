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
var Sports = /** @class */ (function () {
    function Sports(name, noOfPlayers) {
        var _this = this;
        this.name = name;
        this.noOfPlayers = noOfPlayers;
        this.printDetails = function () {
            console.log("name:".concat(_this.name, ",no of players:").concat(_this.noOfPlayers));
        };
    }
    return Sports;
}());
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket(name, noOfPlayers, coach, tournamentName, origin) {
        var _this = _super.call(this, name, noOfPlayers) || this;
        _this.name = name;
        _this.noOfPlayers = noOfPlayers;
        _this.coach = coach;
        _this.tournamentName = tournamentName;
        _this.origin = origin;
        return _this;
    }
    Cricket.prototype.groundType = function () {
        console.log("Ground is in oval shape");
    };
    return Cricket;
}(Sports));
var Football = /** @class */ (function (_super) {
    __extends(Football, _super);
    function Football(name, noOfPlayers, sponser, matchName) {
        var _this = _super.call(this, name, noOfPlayers) || this;
        _this.name = name;
        _this.noOfPlayers = noOfPlayers;
        _this.sponser = sponser;
        _this.matchName = matchName;
        return _this;
    }
    Football.prototype.groundType = function () {
        console.log("Ground is in square shape");
    };
    return Football;
}(Sports));
var Tournament;
(function (Tournament) {
    Tournament["IPL"] = "IPL";
    Tournament["T20"] = "T20";
    Tournament["LALIGA"] = "Laliga";
    Tournament["BUNDESLIGA"] = "Bundesliga";
})(Tournament || (Tournament = {}));
var cricket = new Cricket("Superkings", 11, "Malya", Tournament.IPL, "England");
cricket.printDetails();
cricket.groundType();
