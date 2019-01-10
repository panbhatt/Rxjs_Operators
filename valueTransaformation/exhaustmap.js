let { of } = require("rxjs");

let { exhaustMap, delay } = require("rxjs/operators");

of("A", "B", "C", "D")
  .pipe(
    exhaustMap(x => {
      switch (x) {
        case "A":
          return of(x, x.toLowerCase());
        case "B":
          return of(x, x.toUpperCase());
        case "C":
          return of(x).pipe(delay(10));
        case "D":
          return of(x);
      }
    })
  )
  .subscribe(x => console.log(x));
