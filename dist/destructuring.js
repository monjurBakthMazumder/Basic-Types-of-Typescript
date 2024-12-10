"use strict";
{
    // destructuring
    // object
    var user = {
        id: 233,
        name: {
            firstName: "Md Monjur",
            middleName: "Bakth",
            lastName: " Mazumder",
        },
        contact: "23345455623",
        address: "Bangladesh",
    };
    var contact = user.contact, midName = user.name.middleName;
    // array
    var friend = ["d", "e", "f", "a", "b", "c"];
    var firstFriend = friend[0], thirdFriend = friend[2], rest = friend.slice(3);
}
