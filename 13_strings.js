let name='hello';
console.log(name.length);
console.log(name[0]);
console.log(name[1]);

//template litrals
let fName="Himanshu";
let lName="Mehra";

//create a sting
//we can use "" and '' in side a string with use of this
let fullName=`first name is "fname" and last name is lName`;

// string inter polation -> we can insert varaibles directly inside string using -> ${}
let nameFull=`first name is ${fName} and last name is ${lName}`
console.log(fullName);
console.log(nameFull);

//escape sequence char
let object='banana\'s';
console.log(object);
let object1='banana\"s'
console.log(object1);

let object2='this me my name will print in new line\n himanshu'
console.log(object2);



