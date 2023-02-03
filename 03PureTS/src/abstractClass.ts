abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //complex calculation
    return 7;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Hi! Sepia");
  }
}

const vaibhav = new Instagram("vaibhav", "Vaibhav", 7);
vaibhav.getReelTime();

export {};
