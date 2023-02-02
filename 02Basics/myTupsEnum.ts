// let user: (string | number | boolean)[] = ["vt", 7, true];

let user: [string, number, boolean];
user = ["vaibhav", 7, false];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];
const newUser: User = [7, "example"];

newUser[1] = "Tyagi";
newUser.push("hi");

console.log(newUser);

export {};
