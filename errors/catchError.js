const { throwError, of } = require('rxjs'); 
const { catchError, map , tap} = require('rxjs/operators') ;


console.log("# Catch then rethrow the error") ;

throwError('error occured').pipe(
    catchError( err => { 
        console.log("AN Error occured") ;
        return throwError(`Rethrown - ${err}`) ;
    }),
    catchError(err => {
        console.log(' Another Error occured. ') ;
        return of(); 
    })
).subscribe(
    d => { 
        if(d){
            console.log(d);
        } else {
            console.log('I got undefined. ') ;
        }
    }
);


of('a',1).pipe(
    tap(x => console.log(' Got '+ x)),
    map(x => x.toUpperCase()),
    catchError(err =>{
        return of(undefined);
    })
).subscribe(d => {
    if(d) {
        console.log('Upper Case value ' + d) ;
    }
})