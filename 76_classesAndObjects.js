//
//Object: An Object is a unique entity that contains properties and methods.
//For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower
//and performs certain actions like driving. The characteristics of an Object are called Properties
//in Object-Oriented Programming and the actions are called methods.
// An Object is an instance of a class. Objects are everywhere in JavaScript,
//almost every element is an Object whether it is a function, array, or string.
//Note: A Method in javascript is a property of an object whose value is a function.

//classes=>Classes are blueprints of an Object. A class can have many
//Objects because the class is a template while Objects are instances of the class or the concrete implementation.

class RailwayForm {
    //methods of class 
  submit() {
    console.log(this.name+" submitted",'trainNumber=>',this.tnum);
  }

  cancle() {
   console.log(this.name + " cancled", "trainNumber=>", this.tnum);
  }
  fill(name1,tnum) {
    this.name = name1;
    this.tnum=tnum;
  }
}

//harry and ram is an objects
//create the form for harry
let harry = new RailwayForm();
//fill details
harry.fill("anshu",1121);
//create the form for harry
let ram = new RailwayForm();
//fill details
ram.fill("ram",2213);


//calling the methods
harry.submit();
ram.submit();
ram.cancle();
