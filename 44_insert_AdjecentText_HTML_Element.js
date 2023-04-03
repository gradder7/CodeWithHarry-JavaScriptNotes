let first = document.getElementById("first");
// console.log(first);

//beforeend=> insert at the end of the #first element. see console
first.insertAdjacentHTML("beforeend", "<h1>hello i am before end</h>");

// //beforebegin=. this will be before the element.
first.insertAdjacentHTML("beforebegin", "<h1>hello i am before begin</h>");

// //afterend=> insert after the element imidialty
first.insertAdjacentHTML("afterend", "<h1>hello i am after end</h>");

// //afterbegin=> insert at the start of the element
first.insertAdjacentHTML("afterbegin", "<h1>hello i am after begin<h>");
