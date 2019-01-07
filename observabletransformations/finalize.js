let { of , interval } = require('rxjs') ;
let { repeatWhen, take , map, startWith, endWith, finalize} =  require('rxjs/operators') ; 

of(1,2,3).pipe(
   finalize(() => console.log("FINALLY is always called"))
).subscribe(val => console.log(val), err => console.log(err), () => console.log('COMPLETE')) ; 


