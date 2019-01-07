const { of, Observable } = require('rxjs'); 
const { timeout }  = require('rxjs/operators') ;

const source = Observable.create(observer => {

        observer.next('A') ;
        setTimeout(() => observer.next('B'), 100) ;
        setTimeout(() => observer.next('C'), 200) ;
        setTimeout(() => observer.next('D'), 2000) ;
});


source.pipe(
    timeout(300)   
).subscribe(val => console.log("Value = " + val),
 err => console.log(err) 
); 