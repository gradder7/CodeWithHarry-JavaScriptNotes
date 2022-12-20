//three methods to search in dom
//1=> matches();
let a= document.getElementById("id1");
console.log(a);

//it checks is element matches with the selector or not or not return boolean value
//true if the Element matches the selectors. Otherwise, false.
// read=>https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
console.log(id1.matches(".box"))//ture 
console.log(id1.matches(".class"))//false



//closest()->The closest() method of the Element interface traverses
// the element,itself and its parents(heading toward the document root) 
//until it finds a node that matches the specified CSS selector.
//returns element
let b= document.getElementById("para1");
console.log(b.closest(".box"))


//contains()->(elementA).contains(elementB)-> boolean(decedeant check)
//here a which is div is checking is b(p tag) is present in its decendents or not
console.log(a.contains(b));//true
//checks it self also
console.log(a.contains(a));//true//self check
console.log(b.contains(a))//false // not check in ancestors
