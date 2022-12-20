//writes in document 
// document.write('heloooooooooo');

// //it will execute imidiatly
// alert('be alerted');

// //setTimeout();

// let a=setTimeout(function(){
//     alert('i am inside the setTime out')
// },5000) // here 5000 is time in miliseconds,

// //cancle the setTimeout nothing will show.
// // clearTimeout(a);

// console.log(a);// we will get the set time out id in console.

// //example-
// let b= prompt('do you want to run set time out');
// //here n is no
// if('n'==b){
//     clearTimeout(a);
// }

//we can also pass arguments in setTimeout

const sum=(a,b)=>{
    console.log('i am calculating '+(a+b));
    a+b;
}

//setTimeout(function,time in ms,args1,args2,....,n)
setTimeout(sum,5000,2,3);


//------->setInter(fucntion,ddelay,args1,...,argsn);
//it will executes regularty after set interval of time

let b =setInterval(function(){
    alert("hello i am interval");
    console.log('i am interval');
},3000)
//clear the interval;
clearInterval(b);


//substarct using setInterval
let subtract=(a,b)=>{
    console.log('i am substracting'+(a-b) );
    a-b;
}

setInterval(subtract,2000,10,5);



