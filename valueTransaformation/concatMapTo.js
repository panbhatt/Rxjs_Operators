let { of, interval } = require("rxjs");

let { take, concatMapTo } = require("rxjs/operators");

interval(1000)
  .pipe(take(3), concatMapTo(of("A", "B", "C")))
  .subscribe(val => console.log(val));
