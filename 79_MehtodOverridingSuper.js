class Employee {
  constructor(name){
    this.name=name;
  }
  login() {
    console.log(`Employee has loged in`);
  }
  logout() {
    console.log(`Employee has logout out`);
  }

  requestLeaves(leaves) {
    console.log(`employee has requested ${leaves} leaves- auto APProve`);
  }
}

class Programmer extends Employee {
  requestCoffe(x,name) {
    this.name=name;
    console.log(`${this.name} has requested coffies ${x}`);
  }

  // we have ovverrided the method of the parent class to use it as child defined method only not by parent
  //increase leaves for programer by 1
  requestLeaves(leaves) {
    // console.log(
    //   `employee has requested ${leaves + 1} leaves(one extra leaves)`
    // );
    //ovverride method but we also want to acces the parent method so we use super
    //we will use the super keyword to call the methods of,
    //parenrt class and can pass the paramenters also
    // super.requestLeaves(leaves);
    //it is compuslory to use this else give undefined
    super.requestLeaves(leaves);
    this.leaves = leaves;
    console.log(this.leaves, "leaves granted");
  }
}

//if i do programmer istead of employee ,
//nothing will change as here is inheritance
let e1 = new Programmer();
e1.login();
e1.requestLeaves(3);
e1.logout();
e1.requestCoffe(5,'akhil');
