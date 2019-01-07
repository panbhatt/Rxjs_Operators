let { interval ,  of , Observable, timer } = require('rxjs') ; 
let { combineAll , take, delay} = require('rxjs/operators') ; 


let source1 = interval(300).pipe(take(10)); 
let source2 = interval(200).pipe(take(5)) ; 


of(source1, source2).pipe(
    combineAll()
).subscribe( ([ val1, val2]) => console.log( ' VAL 1 ' + val1 + "   Val 2 = " + val2) 
, err => console.log(' Err ' + err)) ; 