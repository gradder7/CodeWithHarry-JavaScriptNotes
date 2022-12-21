// What are Cookies?
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, 
// //and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies are saved in name-value pairs like: username = John Doe

//When a browser requests a web page from a server, 
//cookies belonging to the page are added to the request. 
//This way the server gets the necessary data to "remember" information about users.


//JavaScript can create, read, and delete cookies with the document.cookie property.

//show the available cookies
console.log(document.cookie);
//print cookies to added
console.log(document.cookie ='name1=hello all');

//now the name1 data will be updated
console.log(document.cookie='name1=trim');

//the added cookies will be added to cookies
console.log(document.cookie);


console.log('cookies adding from promt\n-----------------------');
let key =prompt('enter the key')
let value =prompt('enter the value')

//if i use ; = it will not added in cookies
//so to add these we use encodeURICompenent() to encode them in some code
//to decode them we can use decodeURIComnponent()
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);


//You can also add an expiry date (in UTC time). 
//By default, the cookie is deleted when the browser is closed:

//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// With a path parameter, you can tell the browser what path the cookie belongs to.
//  By default, the cookie belongs to the current page.

//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

