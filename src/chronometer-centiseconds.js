class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime <= 100) {
      return 0;
    } else {
      let secondsFilter = this.currentTime % 6000;
      let filterFilter;
      secondsFilter = secondsFilter.toString();

      filterFilter = secondsFilter.slice(-4, -2);
      return Number(filterFilter);
    }
  }
  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      let secondsFilter = this.currentTime;

      secondsFilter = secondsFilter.toString();

      return Number(secondsFilter.slice(-2));
    }
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();

    if (valueString.length === 1) {
      return `0${valueString}`;
    } else {
      return valueString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
