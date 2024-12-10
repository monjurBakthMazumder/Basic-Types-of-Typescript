"use strict";
{
    // unknown typeof
    var getSpeedMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("The speed if ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === "string") {
            var _a = value.split(" "), valueInNumber = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
            console.log("The speed if ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeedMeterPerSecond(1000);
    getSpeedMeterPerSecond("1000 ms^-1");
}
