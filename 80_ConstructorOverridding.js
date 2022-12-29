class Employee {
  constructor(name) {
    this.name = name;
    console.log(this.name + " Employess constructor is here");
  }
  login() {
    console.log(`Employee has loged in`);
  }
  logout() {
    console.log(`Employee has logout in`);
  }

  requestLeaves(leaves) {
    console.log(`employee has requested ${leaves} leaves- auto APProve`);
  }
}

class Programmer extends Employee {
  //if not provide constuctor here the js engine automatically,
  //give a default constuctor to it which uses super for parent
  // constructor(...args) {
  //     super(...args);
  // }

  //we can also create our constuctor in child class
  //we must call the super constuctor in the derived class contructor
  //both constructor will run, but 1st the parent one
  constructor(name) {
    //super should be befor this not after this keyword else give error
    super(name);
    this.name = name;
    console.log(this.name + " new constructor");
  }

  requestCoffe(x) {
    console.log(`${name} has requested coffies ${x}`);
  }

  // we have ovverrided the method of the parent class to use it as child defined method only not by parent
  //increase leaves for programer by 1
  requestLeaves(leaves) {
    // console.log(
    //   `employee has requested ${leaves + 1} leaves(one extra leaves)`
    // );
    super.requestLeaves(leaves);
    console.log("leaves granted");
  }
}

//the name will be pass to the default constructor of programmer
//in programmer the constructor will pass this to parent constructor using super
let e1 = new Programmer("Himanshu");
e1.login();
e1.requestLeaves(3);
e1.logout();
