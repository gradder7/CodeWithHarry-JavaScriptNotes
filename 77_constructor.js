//A JavaScript constructor method is a special type of method which is used
// to initialize and create an object. It is called when memory is allocated for an object.
//The constructor keyword is used to declare a constructor method.
//The class can contain one constructor method only.
//JavaScript allows us to use parent class constructor through super keyword.

//this
//In JavaScript, the this keyword refers to an object.
//Which object depends on how this is being invoked (used or called).
//The this keyword refers to different objects depending on how it is used:
//In an object method, this refers to the object.
//Alone, this refers to the global object.
//In a function, this refers to the global object.
//In a function, in strict mode, this is undefined.
//In an event, this refers to the element that received the event.
//Methods like call(), apply(), and bind() can refer this to any object.
class RailwayForm {
  //always calls when we create an new object
  constructor(name1, tnum) {
    console.log("i am a constuctor"+' given name '+name1+' '+'train numberv '+tnum);
    this.name = name1;
    this.tnum = tnum;
  }
  //methods of class
  submit() {
    console.log(this.name + " submitted", "trainNumber=>", this.tnum);
  }

  cancle() {
    console.log(this.name + " cancled", "trainNumber=>", this.tnum);
  }
}

//harry and ram is an objects
//create the form for harry
//when harry obj is called than constructor also runs
let harry = new RailwayForm("himanshu", 11221);
let ram = new RailwayForm("anshu", 100001);

//calling the methods
harry.submit();
ram.submit();
ram.cancle();
