let a = document.getElementsByTagName("div")[0];
//container div
//return html collection
// console.log(a);
// console.log(a.innerHTML);
// a.innerHTML=a.innerHTML+'<h1>hello iam head 1</h1>';

//create an element
//make element (give text to it)
//add element to it

//create
let ele = document.createElement("div");
ele.setAttribute("id", "div1");
//make element
ele.innerHTML = "<h1>hello i am newley created h1 inside div</h1>";

//append it in the parent

// let parentele= document.querySelector('body').appendChild(ele); //create inside the body
//append()=> append at the last
a.appendChild(ele); // create inside the div

// //node.prepend(e)=> insert at the begining of the node start
a.prepend(ele);

// //node.before(ele)=> insert before node
a.before(ele); // it will be outside the div(a) see in console log

// //node.after(ele)-> insert afeter the node
a.after(ele); // it will be outside the div(a) means after

// //node.replaceWith(ele)=> replace node eith given node;
a.replaceWith(ele); // it will remove the div(a) and replacce it with ele.
