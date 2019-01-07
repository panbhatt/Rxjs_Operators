let { of } = require('rxjs') ; 
let { find , findIndex } = require('rxjs/operators') ; 


of(1,2,3,4,5,50, 10).pipe(
    find(x => x%5 == 0)
).subscribe(val => console.log(val)); 


of(1,2,3,4,5,50, 10).pipe(
    findIndex(x => x%5 == 0)
).subscribe(val => console.log('Index = ' + val)); 