const  { interval, of, from  } = require('rxjs');
const { buffer,bufferWhen, take,tap} = require('rxjs/operators') ;


let opening = interval(400).pipe(tap(() => console.log("OPEN"))) ;
let closing = () => interval(300).pipe(tap(() => console.log("CLOSE") )) ;

let val = 0 ; 

interval(500).pipe(
    take(10),
    tap(x => (val = x) ), 
    bufferWhen(() => {
        if(val < 5) return interval(1000); 
        else return interval(500); 
    })
).subscribe(
    val =>  console.log(val),
    err => console.log('Err occured'),
    com => console.log(' Buffer When COMPLETED. ')
); 
