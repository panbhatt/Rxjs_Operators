let { of, Notification } = require("rxjs");
let { dematerialize } = require("rxjs/operators");

let ar = [
  Notification.createNext(1),
  Notification.createNext(2),
  Notification.createNext(3)
];

of(...ar)
  .pipe(dematerialize())
  .subscribe(val => console.log(val));
