//className=> we can gice the classes to element
let first=document.getElementById('first');
first.className=' text-dark yellow';

//first.classList => gives DomTokenList of class in return
console.log(first.classList);

//first.classList.remove('name');=>will remove the class from element
//yellow class will be removed
first.classList.remove('yellow');

//add=> add class to first in list
first.classList.add('red');

//first.classList.toogle('red')=> if have ele has class remove it and if not add it;
first.classList.toggle('red');

//first.classList.contains('class')=>check for the given class=> boolean t/f
console.log(first.classList.contains('red'));//false as we use toggle
console.log(first.classList.contains('text-dark'));//true



