//error object => have some properties
//like name,messgae stack we can print it in catch using error object
//we can gthrow the custome errors also using the throw 
try {
    //it will throw error so we are handling it
    // console.log(anshu)
    let age=prompt('Enter you age');
    age=Number.parseInt(age);
    if(age>150){
        //custome error=> we can use throws to throw custome error 
        //syntax=> throws new errorName(messgae);
        // throw new SyntaxError('i am a error');
        throw new ReferenceError('i am a error');
    }
} catch (error) {
    //name of error
    console.log(error.name);
    //message of error
    console.log(error.message);
    //stack of error
    console.log(error.stack);
}