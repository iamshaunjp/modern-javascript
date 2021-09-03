//date & times

//constructor - is going to generally create a new object for us.

const now = new Date();

console.log(now);

//the date and time fall under the object data type
console.log(typeof now); 

//year, months, day, times
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours ', now.getHours());
console.log('getMinutes ', now.getMinutes());
console.log('getSeconds', now.getSeconds());

//timestamps
console.log('timestamps: ', now.getTime());

//date strings
console.log('date strings: ', now.toDateString());

//time strings
console.log('time strings: ', now.toTimeString());

//local date and time strings
console.log('local date and time strings: ', now.toLocaleString());