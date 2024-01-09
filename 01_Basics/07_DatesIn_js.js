// Dates

let myDate = new Date();
console.log(myDate);                    // 2023-09-14T19:28:02.073Z
console.log(myDate.toString());         // Fri Sep 15 2023 00:58:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     // Fri Sep 15 2023
console.log(myDate.toLocaleString());   // 15/9/2023, 12:58:02 am
console.log(myDate.toLocaleTimeString()); // 12:58:02 am
console.log(typeof(myDate));  // object


let myCreatedDate = new Date(2033, 0, 23);
 
console.log(myCreatedDate.toString()); // Sun Jan 23 2033 00:00:00 GMT+0530 (India Standard Time)

let myTimeStamp = Date.now();

console.log(myTimeStamp.toString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 8
console.log(newDate.getDay());   // 5










