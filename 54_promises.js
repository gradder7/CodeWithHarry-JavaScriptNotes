//promise is the promise of code of execution
//solutin of call back hell
//reduce and reject are two call backs provided by js
//the promise object returned by the promise constructor has some properties
//state-> initially:pending =>Fullfiled(resolve) or rejected(reject)
//result=> initialy:undefined=> resolve(value)/ reject(error);

// let promise = new Promise(function(resolve,reject){
//     console.log('i am inside the promise');
//     resolve(63);
// })

// console.log('hello 1');
// function printHello(){
//     console.log('hello in set time out')
// }
// setTimeout(printHello,3000);
// console.log('hello 2')
// console.log(promise);

//-------------- .then and .catch-----------------------

//the promise will be in pending state until time out
//will execute paralley and will notify
let p1= new Promise((resolve,reject)=>{
    console.log('i am pending');
    setTimeout(()=>{
        console.log('i am a promise and i am resovlved');
        resolve(true); //set the value of resolve
    },5000)
})

let p2= new Promise((resolve,reject)=>{
    console.log('i am pending'); 
    setTimeout(()=>{
        console.log('i am a promise and i am rejected');
        reject(new Error('i am promise error '));
    },5000)
})

// console it will print
// Promise {<pending>} // when executed the pending will be fullfilled or rejected and state also
// [[Prototype]]: Promise
// [[PromiseState]]: "pending" // change when executed
// [[PromiseResult]]: undefined //change when execute
console.log(p1);


// console it will print
// Promise {<pending>} // when executed the pending will be fullfilled or rejected and state also
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"  // change when executed
// [[PromiseResult]]: undefined //change when execute
console.log(p2);

//.then(value)=> i want to do some work when p1 complete
//resolve value will be there
//to get the value
p1.then((value)=>{
    //it will print the vaule of p1 after p1 execution
    console.log(value); 
})

//we can pass two funnctions also
//promise.then(function(value){...},
//             function(error({...}
//                  )));

//catch to cath the error
//reject error is there
//error handele
//to get the error
p2.catch((error)=>{
    console.log('there is some error');
})

//we can also take value and handle error using then()
// p2.then((value)=>{
//     console.log('the resolved values is=>',value);
// },(error)=>{
//     console.log(error);
// })
