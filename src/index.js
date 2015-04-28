'use strict'

let Rx = require('rx')
let set = [0,1,2,3]
let stream = Rx.Observable.from(set)
  .map(function cb (el) {
    return el
  })

stream.subscribe(
  function (x) {
    console.log('Next: ' + x);
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
});
