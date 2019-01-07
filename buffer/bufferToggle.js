const  { interval, of, from  } = require('rxjs');
const { buffer,bufferToggle, take,tap} = require('rxjs/operators') ;


let opening = interval(400).pipe(tap(() => console.log("OPEN"))) ;
let closing = () => interval(300).pipe(tap(() => console.log("CLOSE") )) ;


interval(100).pipe(
    tap(x => console.log(x)), 
    bufferToggle(opening,closing),
    take(5)
).subscribe(
    val =>  console.log(val),
    err => console.log('Err occured'),
    com => console.log(' Buffer Toggle COMPLETED. ')
); 
