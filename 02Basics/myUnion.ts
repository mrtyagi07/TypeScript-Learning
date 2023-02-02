let score: number | string = 44;

score = 77;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let myUser: User | Admin = {
  name: "vaibhav",
  id: 123,
};

myUser = { username: "mrtyagi07", id: 123 };

getDbId(2);
getDbId("2");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//!ARRAY
const arr: number[] = [1, 2, 3];
const arr1: string[] = ["1", "2", "3"];
const arr2: (number | string)[] = [1, 2, "3"];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";
// seatAllotment='crew';

export {};
