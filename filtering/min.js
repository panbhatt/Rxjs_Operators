let { of } = require('rxjs'); 
let { min } =  require('rxjs/operators') ; 

let ar  = [
    { name : 'pankaj', age : 34},
    { name : 'rahulj', age : 35},
    { name : 'Namit', age : 37}
];

of(...ar).pipe(
    min((x,y) => x.age < y.age ? -1 : 1 )
).subscribe(val => console.log(val)) ; 