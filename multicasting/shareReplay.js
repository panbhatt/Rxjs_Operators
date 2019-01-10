let { of, timer } = require("rxjs");
let { take, shareReplay } = require("rxjs/operators");
let source$ = timer(0, 100).pipe(take(10), shareReplay(2));

source$.subscribe(val => console.log(" 1 -> " + val));

setTimeout(() => source$.subscribe(val => console.log(" 2 -> " + val)), 800);
