const allowdPassword = ["Password", "123Password", "myComputer"]

function checkPassword(password){
    return allowdPassword.includes(password);
}
function login(password){
    return new Promise((resolve, reject) => {
        if (checkPassword(password)){
            resolve({status: true})
        }else{
            reject({status: false})
        }
    })
}
function checker(password){
    login(password)
   .then(value =>{
    console.log("Authorize User");
    console.log(value);
   })
   .catch(value =>{
    console.log("Wrong User");
    console.log(value);
   })
}

checker("123Password");
checker("Saqlain");