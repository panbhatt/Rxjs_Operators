let { of, interval } = require('rxjs'); 

let { toArray, take, zipAll} = require('rxjs/operators'); 

let source1 = of('A', 0, 'a') ;
let source2 = of('B', 1, 'b') ;


of(source1, source2 ).pipe(
   zipAll()
).subscribe(val => console.log(val)) ; 
