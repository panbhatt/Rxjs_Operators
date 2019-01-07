let { of, interval } = require('rxjs'); 

let { toArray, take} = require('rxjs/operators'); 

interval(100).pipe(
    take(10),
    toArray()
).subscribe(val => console.log(val)) ; 
