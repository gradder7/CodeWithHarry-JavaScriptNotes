//local storage=> it is a data storage type of web storage.
//it does not expire, in refresh does not delete or either in closing the browser also.
//it does not sent to evert http resquest to server
let key =prompt('enter key')
let value =prompt('enter value')

//if the key is same the value gets updated with the new one
//to set the local storage
localStorage.setItem(key,value)

//get the value by the key
console.log(localStorage.getItem(key));

if(key=='red' || key =='blue'){
    //remove the key with value
    localStorage.removeItem(key);
}

if(key=='clear'){
    //it will clear all the local storage delete every thing
    localStorage.clear();
}

//gives the length of the local storage
localStorage.length;
console.log(localStorage.length);


//it will give the key at the given position
console.log(localStorage.key(0));

//the key and value can onnly be string
//objects can also be stored in local storage
//objects are converted to string using JSON.stringify
//and than parse these to json again using JSON.parse
