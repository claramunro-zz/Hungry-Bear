export default class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 150);
  }

  didYouGetEaten() {
    setInterval(() => {
      if (this.foodLevel > 0 && this.foodLevel <= 20) {
        return false;
      } else if (this.foodLevel > 20) {
        this.foodLevel = 10;
        return alert("You saved the grizzly!");
      } else {
        this.foodLevel = 10;
        return alert("You have been eaten!");
      }
    }, 200);
  }

  feed() {
    this.foodLevel++;
  }
}