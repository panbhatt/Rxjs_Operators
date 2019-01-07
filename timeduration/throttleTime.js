let { of , Observable, interval , timer} = require('rxjs'); 
let { delay, take,  delayWhen, throttleTime }= require('rxjs/operators') ; 

//Only first value is being Delay. 

timer(0,10).pipe(
    take(300),
    throttleTime(1000)
).subscribe(val => console.log(val)) ;