class Animal {
  constructor(name) {
    this.name = name;
    //we can use it here also
    // this.name = Animal.capitlize(this.name);
  }

  run() {
    // we can use it here
    console.log("i am running", Animal.capitlize(this.name));
  }

  walk() {
    console.log("i am walking", this.name);
  }

  //its a method
  //   capitlize(name) {
  // console.log(name.charAt(0).toUpperCase() + name.substr(1, name.length));
  //   }

  //static method
  static capitlize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

//we can use it here also
let jack = new Animal(Animal.capitlize("jack"));
jack.run();
jack.walk();

//it will give me error as static method only for class not obj.
// jack.capitlize("himanshu");
