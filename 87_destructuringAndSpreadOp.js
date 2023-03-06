//destructuring=> is used to unpack the values from the array,
//or the properties from the object and assign them the distinct varaibles

let arr = [2, 3, 4, 4, 4, 5, 6, 3, 23, 4, 5];
let [a, b, c, d, ...rest] = arr;
// //normally we do but we do not to do this now
// let a=arr[0];
// let b=arr[1];

//if you give the variable name but not assign the vaule than it will be undefined
//first the vaules will be assigned to varaible than,
//the rest values which do not have varaible assign
//rest will makes an array in log.
console.log(a, b, c, d, rest);

console.log("==============================");

//if do not want to give assign the varailbe to the value just leave the space,
//or give the name of varaible if you want to assign
let arr1 = [2, 3, 4, 5, 6, 3, 23, 4, 5];
let [x, , , , ...left] = arr1;

//x will be 2
//rest will start from [6,3,23,4,5]
console.log(x, left);
//2 [6, 3, 23, 4, 5]

//objects====================destructuring
const obj = { r: 1, t: 2 };
const { r, t } = obj;
// is equivalent to:
// const r = obj.a;
// const t = obj.b;
console.log(r, t);

console.log("========================================");

//spread operator=>The spread (...) syntax allows an iterable,
// such as an array or string, to be expanded in places where zero or more arguments (for function calls)
//or elements (for array literals) are expected. In an object literal,
//the spread syntax enumerates the properties of an object and
//adds the key-value pairs to the object being created.
//here we are converting the array to object
let newArray = [3, 4, 5];
let obj1 = { ...newArray };
console.log(obj1);

//we can pass the vaues of an array to an function
//using spread operator
function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...newArray));

console.log("==========================");

let obj2 = {
  name: "Himanshu",
  company: "xyz",
  address: "abc",
};

//after the object we can give values to override the properties of object

//...obj2=> take everthing from the object
// (name:'john')=>overide the property you want to
console.log({ ...obj2, name: "john" });
//{name: 'john', company: 'xyz', address: 'abc'}
//this will not override the values as we are getting all the properties at last.
console.log({ name: "john", ...obj2 });
//{name: 'Himanshu', company: 'xyz', address: 'abc'}
