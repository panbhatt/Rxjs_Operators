let { of } = require("rxjs");

let { materialize, map } = require("rxjs/operators");

of(1, 2)
  .pipe(materialize())
  .subscribe(val => console.log(JSON.stringify(val)));

setTimeout(() => {
  of(1, 2)
    .pipe(map(x => x.toUpperCase()), materialize())
    .subscribe(val => console.log(JSON.stringify(val)));
}, 2000);
