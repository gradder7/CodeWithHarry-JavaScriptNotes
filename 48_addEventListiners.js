//addEventListner(event,function)
//selecting element
let btn = document.getElementById('btn');


//here function in addEventListener is different function object than remove below
// btn.addEventListener('click',()=>{
//     alert('i am clicked 1')
// })
//instead of this we do function refernce
let x=()=>{
    alert('i am clicked 1')
}
btn.addEventListener('click',x);

// btn.addEventListener('click',()=>{
//     alert('i am clicked 2')
// })
    
    
let y=()=>{
    alert('i am clicked 2')
}

btn.addEventListener('click',y);


// remove event listners remove the eventListner
let a = prompt("what is your favoruite number");

//here function in removeEventListener is different function object than add above
//so this will not work
//to work this thing the refernce of function should be same
if(a=="2"){

//has diferent funcrtion object so not work
// btn.removeEventListener('click',()=>{
//     alert('i am clicked 1')
// })

//take function reference
btn.removeEventListener('click',x)
}