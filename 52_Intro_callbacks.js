//synchronous
//execute one by one
// let a=prompt(' enter age 1');
// let b=prompt(' enter age 2');
// let c=prompt(' enter age 3');
// console.log(a,b,c);


//asynchronous
//initiate now but finish later

//1->print first
// console.log('start');

// //2->this will schedule but go in backgroung and wait for timeout
// setTimeout(()=>{
//     console.log('i am async')
// },3000);

// //3->this  print
// console.log('end');

//output will be
// start
// end
// i am async


//----------->callbacks<-----------
//a function executes when something happens
//


//function to add an script in html
function loadScript(src,callbacks) {
    //create elemnt
    let script=document.createElement('script');

    //add source to src we use =>.src
    script.src=src;

    //when onload it will print the script and show us in console log
    script.onload=function(){
        console.log("Src=>loaded"+src);

        //if script load than pass null in error
        callbacks(null,src);
    }

    //error handling
    //if script is wrong than to handle error we user .onerror
    script.onerror=function(){
        console.log("script has some error=>",src);

        //in callback we pass error and src
        callbacks(new Error("src got some error=>",src))
    }

    //append to parent
    document.body.appendChild(script);

}

//if i want to print this function when script load,
//we pass this functiuon as an argument to the function 
// which is than invoked inside the outer function to conplete action
//we can also pass arguments in call back functions

//error will be passed with src
function hello(error,src){
    //if error than print error
    if(error){
        console.log(error);
        return;
    }
    alert('hello script loaded'+src)
}

function goodmorning(src){
    alert('hello script loaded in morning'+src)
}

//script is added to the body=> see in console
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',hello)