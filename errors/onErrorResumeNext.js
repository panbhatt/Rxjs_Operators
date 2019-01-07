const { of } = require('rxjs') ;
const { onErrorResumeNext, map } = require('rxjs/operators') ;

const source = of('feed1', 'feed2', 'feed3');
const backup = of('first', 'second', 'third') ;

source.pipe(
    map(feed => {
        if(feed == 'feed2') {
            throw new Error('Feed 2 is not acceptable')
        } else return feed; 
    }),
    onErrorResumeNext(backup)
).subscribe(val => console.log(val),
err => console.log('Err -> ' + err.message )

);

