let { of } = require("rxjs");

let { map, mapTo } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(map(x => x * x))
  .subscribe(val => console.log(val));

setTimeout(() => {
  of(1, 2, 3)
    .pipe(mapTo("A"))
    .subscribe(val => console.log(val));
}, 1500);
