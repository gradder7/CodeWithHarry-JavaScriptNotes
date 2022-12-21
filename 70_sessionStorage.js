// The sessionStorage object stores data only for a session. 
// It means that the data stored in the sessionStorage will be deleted when the browser is closed.

// A page session lasts as long as the web browser is open and survives over the page refresh.

// When you open a page in a new tab or window, the web browser creates a new session.

// If you open multiple tabs or windows with the same URL, 
// the web browser creates a separate sessionStorage for each tab or window.
//  So data stored in one web browser tab cannot be accessible in another tab.

//it has same methods as local storage


//storage events => when we update the local or session storage a events occurs  with some properties
window.onstorage=(e)=>{
    alert('change')
    console.log(e);
}
//if i update the value than alert will be shown in different same url page/tab
localStorage.setItem('hello','all')