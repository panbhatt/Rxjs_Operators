let { interval ,  of , Observable, timer } = require('rxjs') ; 
let { mergeAll , take, delay} = require('rxjs/operators') ; 


// basically Flattern . 

let source1 =   Observable.create(obs => {
        obs.next('A'); 
        setTimeout(() => obs.next('B'), 2000); 
        setTimeout(() => obs.complete(), 5000); 
})
let source2 = of(...[' Sunday ' , ' Monday ']) ; 


of(source1, source2).pipe(
    mergeAll()
).subscribe( (val ) => console.log( val) 
, err => console.log(' Err ' + err)) ; 