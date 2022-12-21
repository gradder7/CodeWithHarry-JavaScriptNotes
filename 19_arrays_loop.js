let arr=[1,2,3,4];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//forEach loop
let arr1=[1,2,3,4,5];
arr1.forEach(element => {
    console.log(element*element);
});

//for of-> to get the values

let arr2=[9,70,2,0,34];
for (const i of arr2) {
    console.log(i);
}

//for in -> to get the keys

let arr3=[3,4,5,5,6];
for(const i in arr3){
    console.log(i);
}

//array.from()-> uswed to create array from object
let name='himanshu';
let c= Array.from(name);// form an array of name string
console.log(c);


//map()-> this will create a new array after performing some some operations
let arr4=[20,40,50,60,70];
//it will give me values
arr4.map((value)=>{
    console.log(value);
})

//we can add value , index and arr in it
let arr5=arr4.map((value,index,arr4)=>{
    console.log(value+1,index,arr4[index]+1)
})

// Multiply all the values in an array with 10:
const numbers = [65, 44, 12, 4];
//we can alos pass the function in it
const newNumber=numbers.map(multiply);
function multiply(num) {
    return num*10;
}
console.log(newNumber);
// for(let i in newNumber){
//     console.log(i);
// }
// for(let i of newNumber){
//     console.log(i);
// }

// newNumber.map((value)=>{
//     console.log(value)
// })


//filter()-> it is used to filter the elements using our secenerio and creates a new array

let arr6=[20,1,2,3,44,5,5,333,55,5,666];
let arr7=arr6.filter((value)=>{
    //give me boolean in below case is greater or not
    // console.log(value>10);

    return value>10;
})
// it will give me all the elemnts greater than 10
console.log(arr7);

//we can pass function in filter also
// let arr6=[20,1,2,3,44,5,5,333,55,5,666];
// let arr7=arr6.filter(filtered);
// // it will give me all the elemnts greater than 10
// function filtered(value){
//     return value>10;
// }
// console.log(arr7);


//reduce()-> it resuce the array to a single value and do not change the orignal array
//it takes 3 arguments -> acumulator,value,index and we can ssign defalut value to accumulator also
let arr8=[10,20,30,40,50];
let arr9=arr8.reduce((a,b)=>{
    return a+b;
},0)//,0 is defalut valye of acumulator like sum=0
console.log(arr9);

//we can also pass function as a parameter
// let arr8=[10,20,30,40,50];
// const reduceFunction=(a,b)=>{
//     return a+b;
// }
// let arr9=arr8.reduce(reduceFunction);
// console.log(arr9);


//----find()
//find()=> tries to find the first entries which matches the criteria.if not find uindefined
//find index()=> it will return the index of find element if not found return -1
//filter() => tries to find all the entries which matches the criteria.

///================
//array of objects
const arrObj=[
    {
        name:"Himanshu",
        assignment:100,
    },
    {
        name:"Pihu",
        assignment:1000,
    },
    {
        name:"vaibhav",
        assignment:10,
    },
    {
        name:"pihu",
        assignment:1000,
    }
];


//find the object in the array where name is pihu
const newObjArray = arrObj.find(function(currentObj){
    return currentObj.name==="pihu";
})

console.log("my entry=>",newObjArray);

//find index()=> it will return the index of find element if not found return -1
const newObjArray1 = arrObj.findIndex(function(currentObj){
    return currentObj.name==="pihu";
})

console.log("my entry=>",newObjArray1);









