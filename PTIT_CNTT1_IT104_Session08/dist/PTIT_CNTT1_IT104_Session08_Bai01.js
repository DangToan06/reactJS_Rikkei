"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["MONDAY"] = "Th\u1EE9 Hai";
    WeekDays["TUESDAY"] = "Th\u1EE9 Ba";
    WeekDays["WEDNESDAY"] = "Th\u1EE9 T\u01B0";
    WeekDays["THURSDAY"] = "Th\u1EE9 N\u0103m";
    WeekDays["FRIDAY"] = "Th\u1EE9 S\u00E1u";
    WeekDays["SATURDAY"] = "Th\u1EE9 B\u1EA3y";
    WeekDays["SUNDAY"] = "Ch\u1EE7 Nh\u1EADt";
})(WeekDays || (WeekDays = {}));
Object.keys(WeekDays).forEach((value) => {
    console.log(`${value}`);
});
