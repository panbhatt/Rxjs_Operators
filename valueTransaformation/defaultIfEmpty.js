let { of } = require("rxjs");
let { defaultIfEmpty } = require("rxjs/operators");

of()
  .pipe(defaultIfEmpty(-1))
  .subscribe(val => console.log(val));
