let { of } = require('rxjs') ;
let { repeat , map} =  require('rxjs/operators') ; 

of(1,2,3).pipe(
    repeat(2)
).subscribe(val => console.log(val)) ; 