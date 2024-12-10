{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There are nothing to search");
    }
  };
  searchName(null);
}
