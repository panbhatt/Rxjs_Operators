const { of } = require('rxjs') ; 
const { distinct, distinctUntilChanged, distinctUntilKeyChanged } = require('rxjs/operators') ; 


of(1,2,3,4,2,1).pipe(
    distinct()
).subscribe(val => console.log(val)) ; 



of(1,2,3,4,-2,-1).pipe(
    distinct(x => Math.abs(x)) 
).subscribe(val => console.log('1 : '+ val)) ; 


of(1,-1,2,1,-2, -3, 1).pipe(
    distinctUntilChanged( (x,y) => Math.abs(x) == Math.abs(y))
).subscribe(val => console.log(' DUC : ' + val)) ; 