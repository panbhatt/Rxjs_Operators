let { of, interval, asapScheduler, asyncScheduler } = require('rxjs'); 
let { tap,sampleTime, observeOn,  take, map } = require('rxjs/operators'); 

// Similarly subscribeOn can be used. 


of('asap').pipe(
    tap(x => console.log(' asap comes')),
    observeOn(asapScheduler)
).subscribe(val => console.log(" ASAP value = " + val));


of('async').pipe(
    tap(x => console.log(' ASYNC comes')),
    observeOn(asyncScheduler)
).subscribe(val => console.log(" ASYNC value = " + val));


of('imeediate').subscribe(val => console.log(" IMEEDIATE  val = " + val));