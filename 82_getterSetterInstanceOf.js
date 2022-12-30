//In JavaScript, accessor properties are methods that get or set the value of an object.
// For that, we use these two keywords:
//get - to define a getter method to get the property value
//set - to define a setter method to set the property value

//In JavaScript, getter methods are used to access the properties of an object.
//And also when accessing the value, we access the value as a property.

//setter=>In JavaScript, setter methods are used to change the values of an object. For example,

class Animal {
  constructor(name) {
    this._name = name;
  }

  fly() {
    console.log("i am flying", this._name);
  }
  //get
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

class Rabbit extends Animal{
    eatRabbit(){
        console.log('eating carrot');
    }
}

let a = new Animal("bruno");
let rabbit=new Rabbit();
a.fly();
//In JavaScript, setter methods are used to change the values of an object.
a.name = "jack";

//When you try to access the value as a method, an error occurs.
console.log(a.name);

//instance of operator
//it checks is the obj belong to a class or not
//return boolean
//check in parent classes also where it is inheriting

console.log(a instanceof Animal); //return true
//Rabbit class extends Animal
//so obj is also checked in parents
console.log(rabbit instanceof Animal);//ture
console.log(rabbit instanceof Rabbit);//true


//as c is not belong to class
let c = 30;
console.log(c instanceof Animal); //return false
