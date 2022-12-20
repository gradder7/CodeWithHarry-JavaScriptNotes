let x= document.getElementsByTagName('span')[0];
console.log(x);

//it shows element as an object
let y= document.getElementsByTagName('span')[0];
console.dir(y);

// text.innerHTML
// ' hello i am span '
// text.innerHTML="hello"
// 'hello'
// text.outerHTML
// '<span id="text">hello</span>'
// text.outerHTML="<p>okay</p>"
// '<p>okay</p>'

//gives the text inside the html of whole page excluding tags.
console.log(document.body.textContent);

//hidden is used to hide the particular element