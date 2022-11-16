const promise= new Promise ((resolve,reject)=>{
    resolve("Complete")
})

promise.then((success)=>{
    console.log("success", success);
}).catch((error)=>{
    console.log("error", error);
})