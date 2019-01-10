let { of, empty } = require("rxjs");
let { expand } = require("rxjs/operators");

of(1, 2)
  .pipe(expand(x => (x < 5 ? of(x + 1) : empty())))
  .subscribe(val => console.log(val));
