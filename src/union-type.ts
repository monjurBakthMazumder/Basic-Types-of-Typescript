{
  // union type
  type TUser = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
  };

  const user: TUser = {
    name: "Md Monjur",
    gender: "Male",
  };

  console.log({ user });
}
