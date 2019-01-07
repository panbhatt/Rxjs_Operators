const  { interval, of, from  } = require('rxjs');
const { buffer,bufferTime, take} = require('rxjs/operators') ;




interval(100).pipe(
    bufferTime(50),
    take(5)
).subscribe(
    val =>  console.log(val),
    err => console.log('Err occured'),
    com => console.log(' Buffer Time COMPLETED. ')
); 
