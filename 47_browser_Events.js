let a = document.getElementsByClassName('container')[0];

// console.log(a);
//it will execute when we click on container
a.onClick= ()=>{
    let b=document.getElementsByClassName('container')[0];
    b.innerHtml="<h1>hello i am js</h1> "
    console.log('hello');
}