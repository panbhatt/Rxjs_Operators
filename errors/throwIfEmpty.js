const { of } = require('rxjs');
const { map, throwIfEmpty, tap } = require('rxjs/operators') ;


of().pipe(
    tap(x => console.log('Getting this ' + x)),
    throwIfEmpty()
).subscribe(
    v => console.log(v),
    err => console.log('Recevied Error ' + err.message)
)