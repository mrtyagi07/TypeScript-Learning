/* const user = {
  name: "Vaibhav",
  email: "v07@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Vaibhav", isPaid: true, email: "v07@gmail.com" };

// createUser({ name: "vaibhav", isPaid: false });
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "Typescript", price: 499 };
} */

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number;
};

let myUser: User = {
  _id: "11234",
  name: "Vaibhav",
  email: "v07@gmail.com",
  isActive: false,
};

myUser.name = "Raman";

type cardNumber = { cardnumber: string };
type cardDate = { carddate: string };

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
