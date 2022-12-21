//1=>use free api from the internet and feed your app with the live data
let url='https://kontests.net/api/v1/all';
let response=fetch(url);
response.then((contest)=>{
    return contest.json();
}).then((contest)=>{
    //array of objects return
    console.log(contest);
    inHtml="";
    //use for in object
    for(value in contest){
        // console.log(value)
        console.log(contest[value]);
        inHtml+=`
        <div class="card mx-3 my-3" style="width: 20rem">
          <img src="https://www.shutterstock.com/image-vector/kids-learning-coding-programming-online-260nw-1777292972.jpg" class="card-img-top" alt="img" />
          <div class="card-body">
            <h5 class="card-title">${contest[value].name}</h5>
            <p class="card-text"><b>Status:</b> ${contest[value].status} </p>
            <p class="card-text"><b>Start Time:</b>${contest[value].start_time}</p>
            <p class="card-text"><b>End Time:</b> ${contest[value].end_time}</p>
            <p class="card-text"><b>Duration:</b> ${contest[value].duration} </p>
            <a href="${contest[value].url}" target="_blank" class="btn btn-primary my-4">Visit us</a>
          </div>
          </div>
          `
    }
    cardContainer.innerHTML=inHtml;
})

//Note app remainig questions

// //fetch the local storage
// let n=localStorage.getItem("Note");
// alert('your current note is in local is=>'+n)

// //save local storage
// //if a is null then set
// let a;
// a= prompt('enter the note')
// //i am changing the note but if noothing enter in notre it will not update to null
// if(a){
//     localStorage.setItem('Note',a);
// }

// let c=confirm('do you wanr to delete the last note?')
// if(c){
//     localStorage.removeItem('Note');
// }