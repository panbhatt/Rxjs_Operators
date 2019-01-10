let { of } = require("rxjs");

let { endWith } = require("rxjs/operators");

of("A", "B", "C")
  .pipe(endWith(...["Y", "Z"]))
  .subscribe(val => console.log(val));
