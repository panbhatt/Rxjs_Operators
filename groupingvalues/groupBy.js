let { of } = require('rxjs') ; 
let { groupBy, mergeMap, reduce, toArray} = require('rxjs/operators') ; 


let postsData = [
  { id : 1, likes : 1, comments : 2},
  { id : 1, likes : 0, comments : 3},
  { id : 1, likes : 1, comments : 4},

  { id : 2, likes : 0, comments : 2},
  { id : 2, likes : 0, comments : 5},
  { id : 2, likes : 1, comments : 0},

  { id : 3, likes : 1, comments : 1},
  { id : 3, likes : 0, comments : 2},
  { id : 3, likes : 3, comments : 0}
] ;

of(...postsData).pipe(
    groupBy(post => post.id),
    mergeMap(post => post.pipe(
        reduce( (acc, curr) => {
                acc.id = acc.id || curr.id ; 
                acc.likes += curr.likes;
                acc.comments += curr.comments; 
                return acc; 

         }, { id : null, likes : 0, comments : 0 })
    ))
).subscribe(val => console.log(val)) ; 