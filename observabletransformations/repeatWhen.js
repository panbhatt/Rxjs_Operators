let { of , interval } = require('rxjs') ;
let { repeatWhen, take , map, startWith, endWith} =  require('rxjs/operators') ; 

of(1,2,3).pipe(
    startWith("Internal Starts"),
    repeatWhen( () => 
        interval(0,2000).pipe(
            take(5)
        )
    ),
    endWith("finishing the sequence here.")
).subscribe(val => console.log(val)) ; 