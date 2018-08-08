var moment = require('moment');


var date = moment();

var date1 = moment().add(5, 'm');

console.log(date.format('Do MMMM YYYY HH mm ss'));
console.log(date1.format('Do MMMM YYYY HH mm ss'));

console.log(date1.fromNow(true));


var createdAt = 1234;

var date3 = moment(createdAt);

console.log(date3.toNow());