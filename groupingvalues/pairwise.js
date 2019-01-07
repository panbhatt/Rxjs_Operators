let { of } = require('rxjs') ; 
let { pairwise } = require('rxjs/operators') ; 


let ar = [ 1,2,3,4,5,6,7,8,9]; 

of(...ar).pipe(
    pairwise()
).subscribe(val => console.log(val)) ; 