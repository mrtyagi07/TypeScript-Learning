function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

addTwo(7);

function getUpper(val: string) {
  val.toUpperCase();
}

getUpper("vaibhav");

function signUp(name: string, email: string, isLoggedIn: boolean = false) {}

signUp("vaibhav", "v07@gmail.com");

let loginUser = function login(email: string, password: string) {};

loginUser("v@07.com", "Ty111221");

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

//! ARROW FUNCTION
const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "iromman", "superman"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
