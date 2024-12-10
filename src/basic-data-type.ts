{
  // basic data type

  // primitive type
  // string
  let name: string = "Md Monjur akth Mazumder";
  console.log({ name });
  // number
  let roll: number = 123;
  console.log({ roll });
  // boolean
  let ok: boolean = false;
  console.log({ ok });
  // undefine
  let x: undefined = undefined;
  console.log({ x });
  // null
  let y: null = null;
  console.log({ y });
  // any
  let z: any;
  console.log({ z });

  // non-primitive type
  // Array
  let friend: string[] = ["Md", " Monjur", "bakth"];
  console.log({ friend });
  let friendRoll: number[] = [2, 3, 4, 6, 7, 3, 4];
  console.log({ friendRoll });

  // tuple --> --array --> order --> type of value
  let coordinates: [number, number, number] = [1, 2, 3];
  console.log({ coordinates });
  let ageName: [number, string] = [21, "Md Monjur Bakth Mazumder"];
  console.log(ageName);
}
