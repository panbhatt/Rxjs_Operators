const  { interval } = require('rxjs');
const { buffer, take} = require('rxjs/operators') ;


interval(100).pipe(
    buffer(interval(1000)),
    take(5)
).subscribe(
    val =>  console.log(val),
    err => console.log('Err occured'),
    com => console.log('COMPLETED. ')
); 
