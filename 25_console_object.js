//shows the all the methods in console object
console.log(console);

//print hello in console
console.log("hello");

// shows error in console
console.error("not why?")

//assertion fails if conditon is false in log in error tab
console.assert(5>53);

//console.clear();-> ckear the console
console.clear();



//.table() shows data in table form in console
obj={
    a:2,
    b:5,
    c:7
}

console.table(obj);

//show waarning in console
console.warn("dont do this")

//info()-> shows info in console like log
console.info("hey this is an inportant info")


//time() and timeEnd()-> to check how much it take to do 
console.time("forLoop");
for(let i=0;i<10;i++){
    console.log(233)
}
console.timeEnd("forLoop")
//after ending of the loop it will print the time.
