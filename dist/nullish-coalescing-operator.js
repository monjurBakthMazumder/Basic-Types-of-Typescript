"use strict";
{
    //nullish coalescing operator
    // null/undefined --> decision making
    var isAuthenticated1 = null;
    var result1 = isAuthenticated1 !== null && isAuthenticated1 !== void 0 ? isAuthenticated1 : "Guest";
    console.log({ result1: result1 });
    var isAuthenticated2 = undefined;
    var result2 = isAuthenticated2 !== null && isAuthenticated2 !== void 0 ? isAuthenticated2 : "Guest";
    console.log({ result2: result2 });
}
