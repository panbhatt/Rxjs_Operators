const { of , timer, Observable } = require('rxjs') ;
const { map, take, skipUntil } = require('rxjs/operators') ; 

let obs = Observable.create(observer => {
    setTimeout( () => observer.next('A'), 5000) ; 
})

timer(0,1000).pipe(
    take(10),
    skipUntil(obs)
).subscribe(val => console.log(val)) ; 