//gives an alert in mini window
alert("enter the value of a");

//prompt("msg",'default_value')
let a=prompt("enter the value of a here.","100");

//confirm()-> ok for true and cancle for false
let write=confirm("do you want to know the type of a and the value of a?");
if(write){
    alert("you entered a of type "+ typeof a + '\n he value of a is '+a);
}
