"use strict";
var _a;
let allianColor3 = '';
allianColor3 = ((_a = prompt('Choose any color from green, yellow, red')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
if (allianColor3 === "green") {
    alert('The player earned 5 points!');
}
else if (allianColor3 === "yellow") {
    alert('The player earned 10 points!');
}
else if (allianColor3 === "red") {
    alert('The player earned 15 points!');
}
else
    alert("Please select right color");
