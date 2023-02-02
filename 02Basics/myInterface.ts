interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: number;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const vaibhav: Admin = {
  dbId: 77,
  email: "v07@gmail.com",
  userId: 121,
  startTrail: () => {
    return "trail started!";
  },
  getCoupon(name: "vaibhav10", off: 10) {
    return 10;
  },
  githubToken: "V123",
  role: "admin",
};

export {};
