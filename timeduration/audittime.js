let { of, interval } = require('rxjs'); 
let { tap,auditTime, take, map } = require('rxjs/operators'); 

interval(500).pipe(
    tap(x => console.log(' Got Value -> ' + x )),
    auditTime(1000), 
    take(3)
).subscribe(val => console.log(val)) ; 