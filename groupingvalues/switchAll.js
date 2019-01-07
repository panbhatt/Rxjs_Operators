let { Observable, of, Subject} = require('rxjs'); 
let { switchAll } = require('rxjs/operators') ; 

let origin = new Subject(); 

let source1 = Observable.create(obs => {
    setTimeout(() => obs.next('A'), 100); 
    setTimeout(() => obs.next('B'), 500); 
    setTimeout(() => obs.complete(), 1000); 
})

let source2 = Observable.create(obs => {
    setTimeout(() => obs.next('X'), 100); 
    setTimeout(() => obs.next('Y'), 200); 
    setTimeout(() => obs.complete(), 300); 
})

origin.pipe(switchAll()).subscribe(val => console.log(val) ) ; 

origin.next(source1); 
origin.next(source2); 