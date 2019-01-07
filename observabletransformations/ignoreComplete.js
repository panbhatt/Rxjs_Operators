let { of , interval } = require('rxjs') ;
let { repeatWhen, take , map, startWith, endWith, ignoreElements} =  require('rxjs/operators') ; 

of(1,2,3).pipe(
    startWith("Internal Starts"),
    ignoreElements(),
    endWith("finishing the sequence here.")
).subscribe(val => console.log(val), err => console.log(err), () => console.log('COMPLETE')) ; 


