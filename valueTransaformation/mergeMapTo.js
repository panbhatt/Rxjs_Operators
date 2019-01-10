let { of } = require("rxjs");

let { mergeMapTo } = require("rxjs/operators");

of("A", "Y", "z")
  .pipe(mergeMapTo(of(1, 2, 3)))
  .subscribe(val => console.log(val));

setTimeout(() => {
  of("A", "Y", "z")
    .pipe(
      mergeMapTo(of(1, 2, 3), (sourceVal, tarVal) => {
        return `${sourceVal} -> ${tarVal}`;
      })
    )
    .subscribe(val => console.log(val));
}, 1500);
