let { of } = require("rxjs");

let { startWith } = require("rxjs/operators");

of("A", "B", "C")
  .pipe(startWith(...["Y", "Z"]))
  .subscribe(val => console.log(val));
