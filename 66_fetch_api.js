//when we fetch api, a promise is created and it is 
//resovles in another promise whose value is finall result
let p =fetch('https://goweather.herokuapp.com/weather/london');


//getting a response is a two stage process
//1->an object of response{..} is created with some properties
//ex-> state=> https status code / ok=> boolean true if status code is 200-299
p.then((response)=>{

    //response object{...} some properties
    console.log(response); 

    //status code
    console.log(response.status)

    //response headers
    console.log(response.headers);

    //boolean true or false(200-299);
    console.log(response.ok)
    //gives error
    // console.log(response.text());

    //a new promise is return to next then() to resolve
    //to acesses the body in defined format
    //.json=> parse the response in json(js object)
    //.text()=> read  and return the text ... etc...
    //we can only use one body reading  mehtod..
    //promise will resolve here ans pass to next then for final result
    return response.json();
}).then((response)=>{
    //it will give me the body of api
    console.log(response);
})

//we set the request headers and print response headers
//to set a request header in fetch we can use header options in fetch syntax