const  { of , interval}  = require('rxjs') ; 
const { take, map, skip, skipLast } = require('rxjs/operators') ; 

console.log("************ SKIP LAST Results **************") ; 

interval(100, ).pipe(
    take(10),
    skipLast(4)
).subscribe(val => console.log(val)) ; 



