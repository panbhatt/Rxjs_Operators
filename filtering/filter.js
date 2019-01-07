let { of } = require('rxjs') ; 
let { filter } = require('rxjs/operators') ; 

of(1,2,3,4,5,6,7,8,9,10).pipe(
    filter(x => x%2 == 0 )
).subscribe(val => console.log(val )) ; 