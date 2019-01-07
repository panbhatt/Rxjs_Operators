let { of, interval } = require('rxjs'); 
let { tap,sampleTime, take, map } = require('rxjs/operators'); 

interval(500).pipe(
    tap(x => console.log(' Got Value -> ' + x )),
    sampleTime(1000), 
    take(3)
).subscribe(val => console.log(val)) ; 