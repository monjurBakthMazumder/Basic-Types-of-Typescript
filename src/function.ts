// function

// normal function
function add1(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add1(2, 3));

// arrow function
const add2 = (num1: number, num2: number): number => num1 + num2;
console.log(add2(2, 3));

// oject --> function --> method
const poorUser = {
  name: "Md Monjur Bakth Mazumder",
  balance: 0,
  addBalance(balance: number): string {
    return ` My new Balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4, 5];

const newArray = arr.map((elem: number): number => elem * elem);
console.log({ newArray });
