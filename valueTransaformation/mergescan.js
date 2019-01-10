let { of } = require("rxjs");

let { mergeScan } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(
    mergeScan((acc, val) => {
      return of(acc, val, acc * val + val);
    }, 100)
  )
  .subscribe(val => console.log(val));
