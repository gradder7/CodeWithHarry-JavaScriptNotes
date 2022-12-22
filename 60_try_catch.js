
setTimeout(()=>{
    console.log('i am hacking....');
},2000)
//throw error and rest code will not execute
// console.log(rahul);

//to hadle error we use try...catch
//try first execute
//if there is not error,than catch ignored else catch will execute and all rest code will also execute,
//try catch works synchronusly
// try {
//     console.log(rahul)
// } catch (error) { // error varaible contains the error object
//     console.log('hacking stoped due to error',error);
// }

//try catch works synchronusly
//if exception happens in scheduled code than try cath wont work like setTimeout
//here the try will execute first and set time will throws in backgrond to execute in time
//now try is execute due to synconus nature and if scheduled code throws error than it wont catch but rest code will execute
//but inside of setTime out we can use try catch it will work.
try {
    setTimeout(()=>{
        console.log(rahul);
        
        //but inside of setTime out try catch will work
        //       try {
        //     console.log(rahul);
            
        // } catch (error) {
        //      console.log("scheduled error",error);
        // }
    })
} catch (error) {
    console.log("scheduled error",error);
}


setTimeout(()=>{
    console.log('i am hacking task in ips');
},3000)

setTimeout(()=>{
    console.log('password fetching...');
},4000)

setTimeout(()=>{
    console.log('getting details....');
    //this will throw error but code execute as it is a scheduled code
    // console.log(rahul);
},5000)

setTimeout(()=>{
    console.log('hacked sucessfully');
},6000)