let idDiv= document.getElementById('idDiv');

//ele.getAttribute(name)=> used to get the attribute 
//if not present return null
let a = idDiv.getAttribute('class');
console.log(a);

//ele.hasAttribute()=> boolean check has or not
console.log(idDiv.hasAttribute('class'));//true
console.log(idDiv.hasAttribute('style'));//false .. style is attribut in inline style

//ele.setAttributr()=> set the attribute of an element
let second= document.body;
let ele=second.firstElementChild.nextElementSibling;
//setting attributes
ele.setAttribute('class','div2');
ele.setAttribute('id','idDiv2');
//to check get attributes
console.log(ele.getAttribute('class'))// return div2
console.log(ele.getAttribute('id'))//return idDiv2


//ele.removeAttribute(name)=> remove the attribute
//delete the attribute
let remv=idDiv.removeAttribute('class');
console.log(remv);//return undefined
//check for attribute
console.log(idDiv.hasAttribute('class'));

//return node list of all the attributes 
console.log(idDiv.attributes);


//data- * Attribute we can create our custome Attributes with ex-data-name='';
//we can acesses it using ele.dataset.name;
let id2=document.getElementById('id1');

//return dom string map
console.log(id2.dataset);

//rertun name of that attribute
console.log(id2.dataset.name);//himanshu
console.log(id2.dataset.game);//mario







