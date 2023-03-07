let a = {
  name: "Himanshu",
  course: "JavaScript",
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};
// console.log(p.run());
let b = {
  age: "25",
  vechilName: "ford Mustang",
};
// console.log(b);

//setting prototype
a.__proto__ = p;
// console.log(a.__proto__);
// console.log(a.name);
p.__proto__ = b;
//first run check in object itself if not found than
//find in its protoype until not found go on to proto,
//if at the end not found return undefined
// a.run();
console.log(a.age);
// console.log(b.name);/undefiend
