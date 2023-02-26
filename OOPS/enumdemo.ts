enum WeekDays {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}
console.log(WeekDays.MONDAY);
let showType = (choice: WeekDays) => {
  console.log(choice);
};

showType(WeekDays.FRIDAY);
