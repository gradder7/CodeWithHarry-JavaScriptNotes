//1_. load script problem
//async always return the promise
const loadScript=async (src)=>{
        return new Promise((resolve,reject)=>{
            
            let script=document.createElement('script');
            script.src=src;
            document.body.appendChild(script);
            
            script.onload=()=>{
                resolve('Sucessfully loaded =>' + src);
            }
            
            script.onerror=()=>{
                reject(new Error('script is wrong=>' +src))
            }
        }) 
        }

    // using .then and cath
 //let p1= loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
//  p1.then((value)=>{
//     console.log(value);
//  }).catch((err)=>{
//     console.log(err);
//  })

// using async/await
    // const loadNow= async ()=>{
    //     console.log(new Date().getMilliseconds);
    //     //until the scrit does not load wait
    //     let p1= await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
    //     console.log(p1);
    //     console.log(new Date().getMilliseconds);
    // }
    // loadNow();

    //3-> create a promise which rejects after 3 sec. use asyc./await to get its value
    //use try cath to handle error

    // let p2 = ()=>{
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             reject('hi iam an error');
    //         },3000)
    //     })
    // }
    // //throws error after 3 sec
    // // p2();
    // let a=async ()=>{
    //     try {
    //         let c= await p2();
    //         console.log(c);
    //     } catch (error) {
    //         console.log('its an error',error);
    //     }
    // }
    // a();

    //4-> wap  using promise.all() inside an asyn / await  to await 3 promises and  compare,
    //its result  with the  case where  we await these promises one by one

    let promise1= async()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(10);
            },3000)
        })
    }
    let promise2= async()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(20);
            },1000)
        })
    }
    let promise3= async()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(30);
            },2000)
        })
    }

    const run_All_Promise= async()=>{
        //here the total time will be approx 6sec the total of above set time out time
        //as one will await will end than second will start waiting for prev await to complete

        // console.time('run');
        // let x=await promise1(); //fetch first 
        // console.log(x);
        // let y=await promise2();//fetch another
        // console.log(y);
        // let z=await promise3();//fetch another
        // console.log(z);
        // console.timeEnd('run');

        //to reduce the time of await we can use promise.all()
        console.time('run');
        // here run all promises get the value not wait
        let x= promise1(); //fetch first 
        let y= promise2();//fetch another
        let z= promise3();//fetch another
        //it will execute in 3 sec means will execute parllely all the promise,
        //the most time taken promise will be the time of all promises to execute.
        let all_Promise=await Promise.all([x,y,z]);
        console.log(all_Promise);
        console.timeEnd('run');


    }
    run_All_Promise();



