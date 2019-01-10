let { of, timer } = require("rxjs");
let { take, share } = require("rxjs/operators");
let source$ = timer(0, 100).pipe(take(5), share());

source$.subscribe(val => console.log(" 1 -> " + val));

setTimeout(() => source$.subscribe(val => console.log(" 2 -> " + val)), 300);
