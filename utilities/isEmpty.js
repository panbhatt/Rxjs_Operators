let { of } = require("rxjs");
let { isEmpty, tap, take, delay } = require("rxjs/operators");

of()
  .pipe(isEmpty())
  .subscribe(val => console.log(val));

of(1)
  .pipe(delay(2000), isEmpty())
  .subscribe(val => console.log(val));
