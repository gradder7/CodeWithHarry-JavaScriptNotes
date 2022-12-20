const loadScript= (src)=>{
    //promise
    return new Promise((resolve,reject)=>{
        //create element
        let script=document.createElement('script');
        //add source to script tag
        script.src=src;
        //append scipt to body or parent
        document.body.appendChild(script);

        //what happen when script load
        script.onload=()=>{
            resolve(' Sucess fully loaded=> '+src);
            // console.log("loaded",src)
        }
        //what happen when script throws error
        script.onerror=()=>{
            reject(new Error('script got some error Unable to load'));
        }
    })
}
//p1 is a promise
let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");

//promise chaining is hapenning
//if some of any script got error in chaining it will catch and shows custom error
p1.then((value)=>{
    console.log(value);
    //it will return a resovled promise to next then as argument
    return loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js')
}).then((value)=>{
    console.log('second script loaded'+value);

    //in catch if any of one script fail to load it will throw an error.
}).catch((error)=>{
    console.log(error);
})