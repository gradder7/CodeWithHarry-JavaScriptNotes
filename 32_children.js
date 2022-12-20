console.log(document.body.firstChild);
console.log(document.body.lastChild);
//all childs
console.log(document.body.childNodes);

//checks thas has child node or not return true or false
console.log(document.body.hasChildNodes());

//child nodes looks likes an array but are Node-list/collections but,
//we can conert to array using Arrays.from(collection)
let arr= Array.from(document.body.childNodes);
console.log(arr);

//sibllig and parent
// console.log(document.body.firstChild);
let a =document.body.firstChild;
// //parent node only check for node either text, comment , or element
console.log(a.parentNode);

// //it will only gives element
console.log(a.parentElement);

console.log(a.firstChild.nextSibling);
