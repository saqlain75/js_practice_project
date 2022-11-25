function loginUserPromise(email,pas){
return new Promise((resolve, reject) => {
    setTimeout(() => {  
        if(email==="saqlain@abc.com" && pas===1234){
            resolve("welcom")
        }
        else{
           reject("Invalid Password")
        }
    }, 2000);
})
}
function getvideos(email) {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
            if(email){
            resolve(["video1","video2","video3"])
            }
            else{
                reject("Invalid email")
            }
    }, 3000);
    })
}
async function login(){
   try {
       const log=await loginUserPromise("saqlain@abc.com",1234);
       console.log(log);
       const vid=await getvideos("email")
       console.log(vid)
   } catch (error) {
    console.log(error);
   }
}
login();