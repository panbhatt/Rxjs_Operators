let { of } = require("rxjs");
let { every, tap, take } = require("rxjs/operators");

of(1, 2, -4, 6, 7)
  .pipe(every(x => x % 2 == 0))
  .subscribe(val => console.log(val));

of(2, -4, 6)
  .pipe(every(x => x % 2 == 0))
  .subscribe(val => console.log(val));
