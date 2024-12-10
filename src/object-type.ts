{
  // Reference type --> oject type
  type TUser = {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  const user1: TUser = {
    firstName: "Md Monjur",
    middleName: "Bakth",
    lastName: " Mazumder",
  };
  console.log({ user1 });
  const user2: TUser = {
    firstName: "Monjur",
    lastName: " Mazumder",
  };
  console.log({ user2 });
}
