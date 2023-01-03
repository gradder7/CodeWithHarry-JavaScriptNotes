//primise chaining=>chain of promises then pass the resolved value to one another
//using return we can pass the resovle value of one promine to another using .then()
let p1=new Promise((resolve,reject)=>{
    console.log('1 st promise has started');
    setTimeout(()=>{
        //whole code wait for 5 sec and then execute all the then()
        console.log("resolved Promise after 5 sec");
         resolve(65);
    },5000)
})

p1.then((value)=>{
    console.log('value is=>'+value);
    //we can make promise inside then() also
    //1=>assigning a varaible
    let p2= new Promise((resolve,reject)=>{

        //first the p1 promise will execute after 5 sec and than print and for 
        //this setTimeOut wait for again 3 sec and then execute all
        setTimeout(()=>{
         resolve(10);
        },3000)
        
    })
    //using return passing value of resolved to another .then()
    return p2;

}).then((value)=>{
    console.log('last resolved value=> '+value)

    //returing with promise without varaible
    return new Promise((resolve,reject)=>{
        resolve(20);
    })

}).then((value)=>{
    console.log('last resolved value=> '+value)

    return new Promise((resolve,reject)=>{
        resolve(30);
    })

}).then((value)=>{
    console.log('last resolved value=> '+value)
    //I can also do this as js will automatically convert return value to promise(resolve)
    //imidiatly resolved promise
    return 40;

}).then((value)=>{
    console.log('last value of resolved =>'+ value);
})
