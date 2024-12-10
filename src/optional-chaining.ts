{
  // optional chaining
  type TUser = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: TUser = {
    name: "Md Monjur Bakth Mazumder",
    address: {
      city: "MB",
      road: "4205",
      presentAddress: "BD",
    },
  };

  const presentAddress =
    user?.address?.permanentAddress ?? " No permanent address";
  console.log({ presentAddress });
}
