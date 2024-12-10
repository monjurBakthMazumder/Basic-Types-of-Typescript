{
  // never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("something want wrong");
}
