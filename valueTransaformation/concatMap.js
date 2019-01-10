let { of } = require("rxjs");
let { concatMap, delay } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(concatMap(x => [x, x * 3, x * 4]))
  .subscribe(val => console.log(val));

setTimeout(() => {
  of(100, 500, 1000, 1500)
    .pipe(concatMap(ms => of(`Delay after ${ms} `).pipe(delay(ms))))
    .subscribe(val => console.log("2. " + val));
}, 1500);
