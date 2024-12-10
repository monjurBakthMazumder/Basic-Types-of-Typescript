"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    var friend1 = ["d", "e", "f", "a", "b", "c"];
    var friend2 = ["g", "h", "i", "j", "k"];
    friend1.push.apply(friend1, friend2);
    var mentors1 = {
        typeScript: "a",
        redux: "y",
    };
    var mentors2 = {
        prisma: "x",
        cloud: "y",
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    console.log({ mentorList: mentorList });
    // rest operator
    var greetFriend = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends === null || friends === void 0 ? void 0 : friends.map(function (friend) { return console.log("hi ".concat(friend)); });
    };
    console.log(greetFriend("d", "e", "f", "a", "b", "c"));
}
