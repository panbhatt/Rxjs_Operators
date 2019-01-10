let { of } = require("rxjs");

let { pluck } = require("rxjs/operators");

let employess = [
  { " name": " A", address: { city: " NY ", street: " ABC 123" } },
  {
    " name": " A",
    address: { city: " Delray Beach ", street: " Gramercy Square" }
  }
];

of(...employess)
  .pipe(pluck("address"))
  .subscribe(val => console.log("Address is " + JSON.stringify(val)));

of(...employess)
  .pipe(pluck("address", "city"))
  .subscribe(val => console.log("Address is " + JSON.stringify(val)));
