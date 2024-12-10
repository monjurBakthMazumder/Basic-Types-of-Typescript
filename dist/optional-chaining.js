"use strict";
var _a, _b;
{
    var user = {
        name: "Md Monjur Bakth Mazumder",
        address: {
            city: "MB",
            road: "4205",
            presentAddress: "BD",
        },
    };
    var presentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : " No permanent address";
    console.log({ presentAddress: presentAddress });
}
