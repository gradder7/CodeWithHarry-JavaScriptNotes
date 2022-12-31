//1> create a complex number class and create a constuctor,
//to set the real and complex part

//2> write a method to add the complex numbers
class Complex {
  constructor(real, imagnery) {
    this.real = real;
    this.imagnery = imagnery;
  }

  //here num is object thats why num.real and num.imaginary
  //to access the values of object b
  add(num) {
    this.real = this.real + num.real;
    this.imagnery = this.imagnery + num.imagnery;
  }
  get getReal() {
    return this.real;
  }
  set setReal(x) {
    this.real = x;
  }

  get getImagenery() {
    return this.imagnery;
  }

  set setImagenery(x) {
    this.imagnery = x;
  }
}

let a = new Complex(2, 4);
let b = new Complex(3, 4);

//here i am passing object as an argument
a.add(b);
console.log(a.real, a.imagnery);

//5=> use getters and setters to set and get the,
//real and imaginary part of the complex number
a.setReal=1;
a.setImagenery=2;
console.log("real number=>", a.getReal);
console.log("Imaginary number=>", a.getImagenery);

//-------------------------------------------//
//3> create a class student and human override a method to se changes
class Human {
  constructor(name, favFood) {
    this.name = name;
    this.favFood = favFood;
  }

  walk() {
    console.log(`${this.name} human is walking`);
  }
}
class student extends Human {
  //overrided method
  walk() {
    console.log(`${this.name} student is walking`);
    super.walk();
  }
}

let o = new student("himanshu", "bhindi");
o.walk();

//4=>check student is instance of human or not

console.log(o instanceof Human); //true
