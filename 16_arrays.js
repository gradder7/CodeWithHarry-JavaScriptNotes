let marks=[14,10,19,false,"not give"];
marks[6]="present"//adding a new valur to array
marks[0]=100;//we can change the vaule of an array
console.log(marks);
console.log(marks.length);
console.log(marks[6]);
console.log(marks[0]);
//arrays are object
console.log(typeof marks);

//some methods of array

//to string-> conver to string
let a= [1,2,3,4,5];
let b=a.toString();
console.log(b,typeof b);

//join(""); join all element using seperator
//return string
let c= [1,2,3,4,5];
console.log(c.join("->"))

//pop()-> remove last element from array
//return pop element
let n=[1,2,3]
console.log(n.pop());

//push()-> add element to last and return length
let x=[1,2,3,4,5]
console.log(x.push(10));//return the size of array and push element in last
console.log(x)

//shift()-0> remove the first element and return it and if array is empty return undefined
let y=[5,4,3,2,1];
console.log("shift->",y.shift());
console.log(y);

//unshift()-> add element in start and return length
let d=[2,3,4,5];
console.log(d.unshift(1));
console.log(d);

//delete-> operator-> delete the particular index element
//place empty in index and the length is unchanged
let i=[1,2,3,4,5];
delete i[1];
console.log(i);

//concat()-> join the arrays to the given array
//return a new array and not change the existing array
let j=[1,2]
let k=[3,4]
let l=[5,6]
console.log(j.concat(k,l)); //return a new joined array


//sort()-> sort aplhabetically
//assumne the whole array elemnts as string and than sort acc. to alphabetically
 let s=[10000000,400,22,222,33,3,345,767,989,334,324234234];
 console.log(s.sort());
 //so we have to sort we use compare function
 let compare=(a,b)=>{
    return a-b;
 }
 let s1=[10000000,400,22,222,33,3,345,767,989,334,324234234];
 console.log(s1.sort(compare)); // now it will be sorted



 //slice()-> slice out a pice from array
 let u=[1,2,3,4,5];
 console.log(u.slice(0,4));// exclude the last index means 4


 //reverse()-> just reverse the whole array
 let r=[1,2,3,4,5]
 console.log(r.reverse());


 //splice()-> add new elemnts in the array
 //we can provide the (index, number of items to be delted and the items to be added)
//it return the deleted items and modify the orignal array
let g=[1,2,3,4,5,6]
//syntax=>g.slice(startIndex,no. of item to delete,items to add)
let g1=g.splice(2,3,20,30,40,50,60);
console.log("splice deleted=>",g1)//return deleted items
console.log("splice after=>",g);

//map()=>

//YAG6XA999HYFHM





