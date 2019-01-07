let { of , Observable, interval , timer} = require('rxjs'); 
let { delay, take,  delayWhen, timeInterval , timestamp}= require('rxjs/operators') ; 

let source = Observable.create(obs => {
    setTimeout(() => obs.next('A'),100) ;
    setTimeout(() => obs.next('B'),300) ;
    setTimeout(() => obs.next('C'),600) ;

    setTimeout(() => obs.complete,4000) ;
});

source.pipe(
    timeInterval()
).subscribe(val => console.log(val)) ;


source.pipe(
    timestamp()
).subscribe(val => console.log('Timestamp = '+ JSON.stringify(val))) ;