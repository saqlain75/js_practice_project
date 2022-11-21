// Example with CallBack Method

function makeFryAnda(callback){
    setTimeout(() => {
       callback("Egg is ready")
    }, 2000);}
 toastBread=(callback)=>{
    setTimeout(() => {
        callback("Your Toast is ready")
    }, 3000);}

 makeFryAnda((egg)=> {
    console.log(egg)
 toastBread((toast)=> {
    console.log(toast)})
})
 console.log("END");
