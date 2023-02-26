var WeekDays;
(function (WeekDays) {
    WeekDays["MONDAY"] = "Monday";
    WeekDays["TUESDAY"] = "Tuesday";
    WeekDays["WEDNESDAY"] = "Wednesday";
    WeekDays["THURSDAY"] = "Thursday";
    WeekDays["FRIDAY"] = "Friday";
    WeekDays["SATURDAY"] = "Saturday";
    WeekDays["SUNDAY"] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.MONDAY);
var showType = function (choice) {
    console.log(choice);
};
showType(WeekDays.FRIDAY);
