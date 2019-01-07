const { of } = require('rxjs');
const { retry, map, tap }  = require('rxjs/operators'); 

of('a',1).pipe(
    map(x => x.toUpperCase()),
    retry(2)
).subscribe(d => console.log(d),
err => console.log(err)
) 