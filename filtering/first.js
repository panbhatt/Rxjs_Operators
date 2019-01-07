let  { of }  = require('rxjs') ;
let { first} = require('rxjs/operators'); 

of(1,2,3,4,4,5).pipe(
    first()
).subscribe(val => console.log(val)) ;


of(1,2,3,4,4,5).pipe(
    first(x => x%5 ==0 )
).subscribe(val => console.log(val)) ;

of(1,2,3,4,4,5).pipe(
    first(x => x%50 ==0 )
).subscribe(val => console.log(val),
 err => console.log('Eror Occured ' + err.message),
 () => console.log('Complete')) ; 
