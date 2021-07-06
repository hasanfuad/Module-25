console.log(111111111);
console.log(222222222);
console.log(3333333333);

// Execute once

setTimeout(function(){
    console.log('Print SetTimeout');
},3000)


// Execute certain period of time

setInterval(()=> console.log("Print setInterval"), 2000)