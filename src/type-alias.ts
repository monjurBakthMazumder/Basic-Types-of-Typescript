{
  type TStudent = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  };
  const student1: TStudent = {
    name: "Md Monjur Bakth MAzumder",
    age: 12,
    gender: "male",
    contactNo: "0123123",
    address: "bangladesh",
  };
  console.log({ student1 });
  const student2: TStudent = {
    name: "Monjur Mazumder",
    age: 23,
    gender: "male",
    contactNo: "3423432",
    address: "bangladesh",
  };
  console.log({ student2 });

  type TAdd = (num1: number, num2: number) => number;
  const add: TAdd = (num1, num2) => num1 + num2;
  console.log({ add });
}
