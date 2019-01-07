let  {of}  = require('rxjs'); 
let { map, take, skipWhile}  = require('rxjs/operators') ; 

of(1,2,3,4,5,6,1,2,3).pipe(
    skipWhile(x => x < 4)
).subscribe(val => console.log(val)); 