setTimeout(() => {
    console.log("run after 5 secs")
}, 5000)

setInterval(()=>{
    console.log("Run every 5 secs")
}, 5000)

const functionCaller = (fncName) =>{
    fncName();
}
functionCaller(()=> console.log("Hello from callback"))

