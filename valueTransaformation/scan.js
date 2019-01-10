let { of } = require("rxjs");

let { scan } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(
    scan((acc, val) => {
      return acc * val + val;
    }, 100)
  )
  .subscribe(val => console.log(val));
