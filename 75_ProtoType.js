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
//setting prototype
a.__proto__ = p;
a.run();
