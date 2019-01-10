let { of, Observable, interval } = require("rxjs");

let { tap, take, map, switchMap } = require("rxjs/operators");

let obs = Observable.create(obs => {
  obs.next("A");
  setTimeout(() => obs.next("B"), 200);
  setTimeout(() => obs.complete(), 300);
});

let source = interval(50).pipe(take(5));

obs
  .pipe(tap(x => console.log("TAP => " + x)), switchMap(() => source))
  .subscribe(val => console.log(val));

setTimeout(() => {
  obs
    .pipe(switchMap(() => source, (char, num) => `${char}- ${num}`))
    .subscribe(val => console.log(val));
}, 1500);
