let arr = [
        "Initializing Hack tool...",
        "Connecting to Facebook...",
        "Connecting to server 1...",
        "Connection failed. Retrying...",
        "Connecting to server 2",
        "Connected Successfully...",
        "Username iamharry...",
        "Trying Brute Force...",
        "200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."
]



const hackM= async(message,time)=>{
     setTimeout(() => {
     console.log(message);
    }, time * 1000)
}

const hackMain=async()=>{
    for(let i=0;i<arr.length;i++){
        await hackM();
    }
}
hackMain();
