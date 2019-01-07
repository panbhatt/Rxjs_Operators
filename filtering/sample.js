let { of , Observable, interval } = require('rxjs') ; 
let { sample, take } = require('rxjs/operators') ; 

let obs = Observable.create(observer => {
        setTimeout( () => observer.next(1), 500) ;
        setTimeout( () => observer.next(2), 1000) ;
        setTimeout( () => observer.complete(), 1600) ;
})


interval(100).pipe(
    sample(obs),
    take(3)
    
).subscribe(val => console.log(" VAL = " + val )) ;
