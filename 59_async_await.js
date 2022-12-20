//async=> this is a special key word use for promises,
//async ensure that the function always return the promises and the non promise value is wrapped in it,

// async function hello(){
//     //15 will be return as resolved promise
//     return 15;
// }

// //use then to recive tyhe result of the resolved promise
// hello().then((value)=>{
//     console.log(value);
// })



async function weather(){

    let delhiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 degree");
        },2000)
    })

    let lohaghatWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("-15 degree");
        },5000)
    })

    //using then we can recive the value of the promises
    // delhiWeather.then((value)=>{
    //     alert(value)
    // })

    // lohaghatWeather.then((value)=>{
    //     alert(value)
    // })

    //we can take the weather in varaible 
    //await=> wait until the promise is fullfilled
    //it stops the function execution until promise is fullfilled.
    console.log('feetching delhi weather......')
    let delhiW=await delhiWeather;
    console.log('delhi weather=>',delhiW)
    
    //logahat weather
    console.log('feetching lohaghat weather......')
    let lghtW=await lohaghatWeather;
    console.log('Lohaghat weather=>',lghtW)

    //return the resolve value of weather in array form
    return[delhiW,lghtW];
}

//this function runs paralley with the async function
const cherry=()=>{
    console.log('i am cherry');
}

console.log('Welcome to weather controll room=>')
//weather() is returning a promise we can see doing log.
let a=weather();
//function will run paralley
let b=cherry();
console.log(a);
a.then((value)=>{
    console.log(value);
})


//demostration of asyn/await
// const cherry1= async()=>{
//     console.log('i am cherry');
// }

// const allRun=async ()=>{
// console.log('Welcome to weather controll room=>')
// //a have value 
// let a= await weather();
// //cherry1 will execute at last as it will wait for a to fullfilled
// let b=await cherry1();
// }
// allRun();