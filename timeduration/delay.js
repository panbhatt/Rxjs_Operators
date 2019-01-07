let { of , Observable, interval } = require('rxjs'); 
let { delay, delayWhen }= require('rxjs/operators') ; 

//Only first value is being Delay. 

of(1,2).pipe(delay(2000)).subscribe(val => console.log(val)) ;


let source = Observable.create(obs => {
    obs.next('A');
    setTimeout(() => obs.next('B'),5000) ;
    setTimeout(() => obs.next('C'),10000) ;

    setTimeout(() => obs.complete,4000) ;
});


of(10,20,30).pipe(delayWhen((x) => interval(x *100))).subscribe(val => console.log('D = '+ val)) ;