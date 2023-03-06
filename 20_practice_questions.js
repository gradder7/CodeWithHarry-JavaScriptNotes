//take the array size from the user and take user input of array elemnts and add all
//let n= prompt("enter the size of an array");
// if(n<0){
//     alert("size cannot be negative");
// }
// let arr=[];
// for(let i=0;i<n;i++){
//     let a=prompt(`enter the the ${i+1} element`);
//     arr.push(a);
// }
// arr.forEach(element => {
//     console.log(element);
// });


//enter the number until the enterd number!=0

// let arr=[];
// let a;
// while(a!=0){
//         a=prompt(`enter the the elements`);
//         arr.push(a);
// }
// arr.forEach(element => {
//     console.log(element);
// });

//filter the number that are divisible by 10 from the array

let arr=[10,234,20,40,56456];
let arrNew=arr.filter((value)=>{
    return value%10===0;
})
console.log(arrNew);

//create an array to form the square of a given number
let arr2=[1,2,3,4,5];
let newArr2=arr2.map((value)=>{
    return value*value;
})
console.log(newArr2);

//find factorial using reduce
let arr3=[1,2,3,4,5]
const fact=(a,b)=>{
    return a*b;
}
let newArr3=arr3.reduce(fact);
console.log(newArr3);

//find factorial using reduce()
let a=prompt("enter number of which factorial to be found ?");
let num = Number.parseInt(a);
let aArray=[];
while(num>0){
    aArray.push(num);
    num--;
}

let factorial_num=aArray.reduce((a,b)=>{
    return a*b;
})



