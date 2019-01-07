const  { interval, of, from  } = require('rxjs');
const { buffer,bufferCount, take} = require('rxjs/operators') ;




interval(100).pipe(
    bufferCount(4,2),
    take(5)
).subscribe(
    val =>  console.log(val),
    err => console.log('Err occured'),
    com => console.log(' Buffer Count COMPLETED. ')
); 
