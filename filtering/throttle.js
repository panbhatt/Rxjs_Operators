let { of, interval, timer } = require('rxjs') ; 
let { throttle , take } = require('rxjs/operators') ; 


interval(100).pipe(
    take(20),
    throttle(() =>  timer(500))
).subscribe(val => console.log(val)) ; 