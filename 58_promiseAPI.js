// we have three promises
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 1');
    },1000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject(new Error('promise falis'));
        resolve('value 2')
    },2000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 3');
    },3000)
})

//we can print the values using .then() one by one
// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })


//Promise.all([promises,...])=> using Promise.all() we can get the values of all promises,
//when resolved in the array form.
//wait for all promises to resolve and return array of their result
//if fails all the other results are ignored and shoW error in console.
let promise_all= Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
})
// .catch((error)=>{
//     console.log(error);
// })


//Promise.allSettled([p1,p2,p3])=> it will rerturn me the array of objets with status and value in it
//if any one fails it will not ignore other and insert it in array of object with status and reason
//wait for promises to resolve and return the array of objects either resolve(status,value) or reject(status,reason);
// let promise_allSettled=Promise.allSettled([p1,p2,p3]);
// promise_allSettled.then((value)=>{
//     console.log(value);
// })


//Promise.race([p1,p2,p3])=> wait for first promise to settle, and its result/error will become outcome(result);
//which promise will resolve or reject first we get the value
// let promise_race=Promise.race([p1,p2,p3]);
// promise_race.then((value)=>{
//     console.log(value);
// })



//Promise.any()=> gives the value of only first  resolved promise among the promises,not rejected one
//if all are failed gives aggreate error in console.
// let promise_any=Promise.any([p1,p2,p3]);
// promise_any.then((value)=>{
//     console.log(value);
// })

//Promise.resolve(value)=>makes a resolved promise with the given value using then we can print in clog
// let promise_resolve=Promise.resolve(10);
// promise_resolve.then((value)=>{
//     //print 10 in clog
//     console.log(value);
// })

////Promise.reject(new Error('...'))=>makes a rejected promise with the given error using then or catch we can handle in clog
// let promise_reject=Promise.reject(new Error('i am error!!!'));
// promise_reject.then(null,(error)=>{
//     //print 10 in clog
//     console.log(error);
// })

