const { of , Observable }= require('rxjs');
const { timeoutWith }= require('rxjs/operators');

const source = Observable.create(observer => {
    
            observer.next('A') ;
            setTimeout(() => observer.next('B'), 100) ;
            setTimeout(() => observer.next('C'), 200) ;
            setTimeout(() => observer.next('D'), 2000) ;
    });

    const fallback = of('x', 'y', 'z') ;

    source.pipe(
        timeoutWith(300,fallback)
    ).subscribe(
        val => console.log(val),
        err => console.log(err.message)
    )
