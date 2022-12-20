//addEventListner(event,function)
//selecting element
let btn = document.getElementById('btn');

//when ever an event happens the browser creates an event object,
// and put details int it and pass it as an argument to the handler(function)
let x=(e)=>{
    //print the event object
    console.log(e);

    //print the element fom where the event has occured
    console.log(e.target);

    //priint type of event=> click
    console.log(e.type);

     //print the element fom where the event has occured
    console.log(e.currentTarget);
    
    //gives corrdinate where it has clicked
    console.log(e.clientX,e.clientY);
    

}
btn.addEventListener('click',x);
    


