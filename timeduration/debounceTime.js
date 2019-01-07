let { of , Observable } = require('rxjs'); 
let { debounceTime } = require('rxjs/operators') ; 


let source = Observable.create(obs => {
    obs.next('A');
    setTimeout(() => obs.next('B'),500) ;
    setTimeout(() => obs.next('B'),2000) ;

    setTimeout(() => obs.complete,4000) ;
});

source.pipe(
    debounceTime(800)
).subscribe(val => console.log(val)) ;
