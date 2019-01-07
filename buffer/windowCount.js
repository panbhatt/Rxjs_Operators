const  { interval, of, from  } = require('rxjs');
const { buffer,windowCount, take,tap, switchMap, toArray} = require('rxjs/operators') ;




interval(100).pipe(
    windowCount(4),
    take(5) ,
    switchMap((x) => x.pipe(toArray()))
).subscribe(
    val =>  console.log(val),
    err => console.log('Err occured'),
    com => console.log(' WINDOW COUNT COMPLETED. ')
); 
