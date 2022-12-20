//options is an object
// let options={
//     method:'POST',
//     headers:{
//         'Content-type':'application/json',
//     },
//     body: JSON.stringify({
//         title: 'Himanshu',
//         body: 'Mehra',
//         userId: 1,
//   })
// }
// //to make a post request we need to use the fetch api options
// fetch('https://jsonplaceholder.typicode.com/posts',options)

//   .then((response) => response.json())
//   .then((json) => console.log(json));


//using async/await
const details=async()=>{
    let options={
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            title: 'Himanshu',
            body: 'Mehra',
            userId: 1,
      }),
    }
    //make a promise
    let p =await fetch('https://jsonplaceholder.typicode.com/posts',options);
    //wait until the load of url
    let response= await p.json();
    //return a promise
    return response;
}

const myFun=async()=>{
    let detls=await details();
    console.log(detls);
}
myFun();