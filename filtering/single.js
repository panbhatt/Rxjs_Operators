let { of } = require('rxjs') ; 
let { single } = require('rxjs/operators') ; 

let ar = [1,2,3,4,5,6,7,8,9,10]; 


of(...ar).pipe(
    single(x => x%6 == 0)
).subscribe(val => console.log(val)) ; 


of(...ar).pipe(
    single(x => x%16 == 0)
).subscribe(val => console.log(val)) ;   // Will genreate undefined. 


of(...ar).pipe(
    single(x => x%2 == 0)
).subscribe(
    val => console.log(val),
    err => console.log(' Err occured ' + err)) ;   // Will genreate error as more then one vlaues 