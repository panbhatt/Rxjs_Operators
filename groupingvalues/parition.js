let { of } = require('rxjs') ; 
let { partition } = require('rxjs/operators') ; 


let ar = [ 1,2,3,4,5,6,7,8,9]; 

const [odd, even] = of(...ar).pipe(
    partition(x => x%2 != 0)
); 
    odd.subscribe(val => console.log(" ODD = " + val )) ;
    even.subscribe(val => console.log(" EVEN = " + val )) ;
