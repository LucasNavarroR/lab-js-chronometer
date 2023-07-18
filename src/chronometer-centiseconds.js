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
    if (this.currentTime === 0) {
      return 0;
    } else {
      let secondsFilter = this.currentTime % 6000;
      
      secondsFilter = secondsFilter.toString();
      let filterFilter = secondsFilter.slice(0, 2);
      
      return Number(filterFilter);
    }
  }

  getCentiseconds() {

    if (this.currentTime === 0) {
      return 0;
    } else {
      let secondsFilter = this.currentTime % 60000;
      
      secondsFilter = secondsFilter.toString();
      let filterFilter = secondsFilter.slice(0, 1);
      console.log(filterFilter);
      return Number(filterFilter);
    }
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = value.toString();
    if (valueString.length === 1) {
      return `0${valueString}`;
    } else {
      return valueString;
    }

  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
