//change the card title to red
let cTitle=document.getElementById("card_id_title")
cTitle.style.color="red";

//query selector
//node list
let allTitle=document.querySelectorAll(".card-title");
//node list wiil be returned.
console.log(allTitle);
allTitle[0].style.color="green";
allTitle[1].style.color="blue";
allTitle[2].style.color="red";

// it will select the first element of the css selctor.
//document.querySelectorAll(css)[0] = querySelector(css);
document.querySelector(".this").style.color="red";


//document.getElementsByTagName-> return the the given tag in collection of all 
//shows all a elements
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
//we can go like this also


