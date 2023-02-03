"use strict";
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
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        // private _courseCount = 1;
        this._courseCount = 1; //! can access in class also who inherits parent class
        this.city = "Delhi";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this.courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Course count should be more than 1");
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 7;
    }
}
const vaibhav = new User("vaibhav", "v@ibh.com", "2211");
// vaibhav.city = "Ahmedabad";
