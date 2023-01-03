//An IIFE (Immediately Invoked Function Expression) is a JavaScript function,
// that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.
//Avoid polluting the global namespace
let a = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 4000);
  });
};

//iife
//Avoid polluting the global namespace
//all the varaible memory will be released as function  it is inoked
(async () => {
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);

  //if i do this it will wait all to resolve
  // console.log(b,c,d);

  //using this it will not wait for one to fullfill first
  // let all_Promise = await Promise.all([b, c, d]);
  // console.log(all_Promise);
})();
