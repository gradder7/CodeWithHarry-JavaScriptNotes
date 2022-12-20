let p1=new Promise((resolve,reject)=>{
    console.log('promise has been started')
    setTimeout(()=>{
        resolve(10);
    },3000)
})

//multuiple handlers in promises
//here both the then() are runs independently
//they do not pass value to each other
//its is different than chaining
//after 3 sec it will load
//when the p1 promise 1 will be resolved than then() will run...
p1.then(()=>{
    console.log('thanks for being here');
})
p1.then((value)=>{
    console.log('resolved the p1 with value',value);
})
