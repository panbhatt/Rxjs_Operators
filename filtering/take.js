const  {of,timer, interval } = require('rxjs'); 
const { take, takeLast, takeUntil, takeWhile, map } = require('rxjs/operators') ; 


interval(0,100).pipe(take(4)).subscribe(val => console.log(' Take '  + val)) ; 


interval(0,100).pipe(take(100), takeLast(4)).subscribe(val => console.log(' Take  Last -> '  + val)) ; 

timer(0,1000).pipe( takeUntil(interval(3000))).subscribe(val => console.log(' Take  Until -> '  + val)) ; 

timer(0,1000).pipe( takeWhile( val => val < 10 )).subscribe(val => console.log(' Take  While -> '  + val)) ; 
