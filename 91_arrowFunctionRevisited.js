//arrow functions
//

// const sayHello=()=>{
//     console.log('hello');
// }


//we can also write it without {} if its a single line
// const sayHello = (name) => console.log("hello",name);

//we can also remove the() in arrow function
//if we have two paraments than we have to use the brackets()
const sayHello = (name) => console.log("hello", name);


//i can also write this way
const sayHelloAll = () => console.log("hello");
console.log("himanshu");

sayHello("Pihu");

sayHelloAll();

const x = {
  name: "himanshu",
  role: "SDE",
  exp: 4,
  //in normal function means function declaration this point to the object
  showDetails: function () {
    //here this is pointing to the object
    console.log(this);
    //to access the this of object inside the function you can store this in a varaible,
    //than call the varaible by its name inside function
    // let that=this;

    //or to solve this problem we can use lexical this using arrow function
    //as arrow function does not have its own this
    //they take the this of its parent
    //arrow function will go in eclosing scope for this
    //funcrtion decleration have its own this so thay dont go in  enclosing scope
    setTimeout(() => {
      //this will point to the global object
      //if we have a function whith in a function than the inside function this will point to global object
      //if we using this in an event than this will refere to an element that has triggeret event
      console.log(this);
      console.log(
        `the name is ${this.name} have ${this.exp} years of experiance`
      );
    }, 3000);
  },
};

x.showDetails();

// As you probably know, when you define a function and use a variable inside of it, 
//it checks if the variable has been defined in its scope. If it is, it uses it! If not,
// it checks the enclosing scope for that variable definition. 
//It keeps checking enclosing scopes until it finds the variable or reaches global scope.
// Now, function definitions that are not arrow functions define this for you, implicitly.
// Thus, they will never check an enclosing scope when you try to use this in their scope
// (because they find it in their own scope!).
//Arrow functions do NOT define their own this, 
//so they go to the enclosing scope and look for it just as they would with any variable you try to use in their scope.