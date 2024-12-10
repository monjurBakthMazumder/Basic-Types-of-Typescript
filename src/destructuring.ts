{
  // destructuring

  // object
  const user = {
    id: 233,
    name: {
      firstName: "Md Monjur",
      middleName: "Bakth",
      lastName: " Mazumder",
    },
    contact: "23345455623",
    address: "Bangladesh",
  };

  const {
    contact,
    name: { middleName: midName },
  } = user;

  // array
  const friend: string[] = ["d", "e", "f", "a", "b", "c"];
  const [firstFriend, , thirdFriend, ...rest] = friend;
}
