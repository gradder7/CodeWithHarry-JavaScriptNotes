// let a= document.getElementsByTagName('li');
// a[0].style.color="red";

//change first child color and last child color
let b=document.getElementsByTagName('ul');
b[0].firstElementChild.style.color='red';
document.getElementsByTagName('ul')[0].lastElementChild.style.color='blue';

//change first child color and last child color
let a= document.getElementsByClassName("div-1");
console.log(a);
a[0].firstElementChild.style.color='red';
a[0].lastElementChild.style.color='red';

//conver collection to array
Array.from(document.getElementsByTagName('li')).forEach(element => {
    element.style.backgroundColor='grey';
});



