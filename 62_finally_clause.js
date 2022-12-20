
try {
    let a=10;
    //throws error so catch will execute
    console.log(hello);
    console.log('program run sucessfully');
} catch (error) {
    console.log(error);
    //it will throw error in console,
    //we can also use try catch inside catch to handle
    //if catch throws error tha also finally will run
    // console.log(hi);
} 
//finally clause will run either their is error or not.
//if there is a error in try and catch as well than also the finally will run

//if there is no finally and we do console.log('something..') than this will not execute,and throw error and stop execution
//as catch also has some error so to run always something we use finally
finally{
    console.log('i am final');
    //close the file
    //exit the loop
    //write to the log file
}

//----------> funally in function-------------------->

console.log("---function finally---")
let fun=()=>{
    try {
        console.log('program run sucessfully');
        return;
    } catch (error) {
        console.log(error);
    } 
    //if we do return in try or catch than also the finally will run
    finally{
        console.log('i am final');
        //close the file
        //exit the loop
        //write to the log file
    }
}
//after return it will run imidiatly
fun();
// it will print at last after finally
console.log('end');
