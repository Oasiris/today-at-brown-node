const moment = require('moment-timezone');


// let a = new Date('2017-12-02 3:00:00');



// // a = a.setUTCHours(a.getUTCHours() - 5);
// let b = new Date(a);
// console.log(a.toTimeString().slice(0, 5));

let a = new Date('2017-12-02 13:00:00');
console.log(moment(a).format('h:ss A'));