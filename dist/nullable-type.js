"use strict";
{
    // nullable type
    var searchName = function (value) {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There are nothing to search");
        }
    };
    searchName(null);
}
