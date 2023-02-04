const socres: Array<number> = [];
const names: Array<string> = [];

function identity1(val: boolean | number): boolean | number {
  return val;
}

function identity2(val: any): any {
  return val;
}

function identity3<Type>(val: Type): Type {
  return val;
}

function identity4<T>(val: T): T {
  return val;
}

interface User {
  name: string;
  email: string;
}

function identity5<User>(user: User): User {
  console.log(user);
  return user;
}

identity5({ name: "vaibhav", email: "v@ibhav07" });

function getSearchProduct<T>(products: T[]): T {
  //DB Operations
  const myIndex = 3;
  return products[myIndex];
}

//! ARROW
const getSearchProduct1 = <T>(products: T[]): T => {
  //DB Operations
  const myIndex = 3;
  return products[1];
};

interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): Object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(7, { connection: "db1", userName: "", password: "" });

interface Quiz {
  name: string;
  question: string;
  answer: string;
}
interface Course {
  name: string;
  author: string;
  quiz: Quiz[];
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(item: T): void {
    this.cart.push(item);
  }
}
