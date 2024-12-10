{
  //nullish coalescing operator
  // null/undefined --> decision making
  const isAuthenticated1 = null;
  const result1 = isAuthenticated1 ?? "Guest";
  console.log({ result1 });
  const isAuthenticated2 = undefined;
  const result2 = isAuthenticated2 ?? "Guest";
  console.log({ result2 });
}
