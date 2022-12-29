//base class
class Animal {
  constructor(name, color, gender) {
    this.name = name;
    this.color = color;
    this.gender = gender;
  }
  run() {
    console.log(this.name + " is running");
  }
  shout() {
    console.log(this.name + " is Shouting");
  }
}

//child classes
class Monkey extends Animal {
  //it will have method of animal ass well as it self also
  eatBanana() {
    console.log(this.name + " is eating banana");
  }
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

let ani = new Animal("jacky", "black");
let m = new Monkey("jane", "brown");

ani.shout();
//the parent cannot use the child properties but child does
// ani.eatBanana();
m.shout();
m.eatBanana();
m.hide();
