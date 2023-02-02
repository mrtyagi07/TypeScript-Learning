//! If you use const before enum then JS code will be minium onluy one line otherwise it will generate IIFE long code

const enum SeatChoice {
  //!Default is 0 and next will +1
  // AISLE = 10,
  // WINDOW,
  // MIDDLE,

  AISLE = "aisle",
  WINDOW = 3,
  MIDDLE,
}

const vtSeat = SeatChoice.MIDDLE;

export {};
