{
  // spread operator
  const friend1: string[] = ["d", "e", "f", "a", "b", "c"];
  const friend2: string[] = ["g", "h", "i", "j", "k"];
  friend1.push(...friend2);

  const mentors1 = {
    typeScript: "a",
    redux: "y",
  };
  const mentors2 = {
    prisma: "x",
    cloud: "y",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  console.log({ mentorList });

  // rest operator
  const greetFriend = (...friends: string[]) => {
    friends?.map((friend: string) => console.log(`hi ${friend}`));
  };
  console.log(greetFriend("d", "e", "f", "a", "b", "c"));
}
