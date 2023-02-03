// class User {
//   public name: string;
//   private email: string;
//   readonly city: string = "Delhi";

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
class User {
  // private _courseCount = 1;
  protected _courseCount = 1; //! can access in class also who inherits parent class

  readonly city: string = "Delhi";

  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this.courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("Course count should be more than 1");
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 7;
  }
}

const vaibhav = new User("vaibhav", "v@ibh.com", "2211");
// vaibhav.city = "Ahmedabad";
