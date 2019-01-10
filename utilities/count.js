let { of } = require("rxjs");
let { count, tap, take } = require("rxjs/operators");

of(1, 2, 3, -4, -5, 6, 7)
  .pipe(count())
  .subscribe(val => console.log(val));

of(1, 2, 3, -4, -5, 6, 7)
  .pipe(count(x => x > 0))
  .subscribe(val => console.log(val));
