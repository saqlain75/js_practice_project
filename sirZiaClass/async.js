//Example with asyncAwait 
function getToastPromise() {
    return new Promise((resolve, reject) => {
        let wifeMood = 6;
        setTimeout(() => {
            if (wifeMood >= 5) {
                resolve("Toast is ready")
            } else {
                reject("I'm in a bad mood")
            }
        }, 3000);
    })
}
function getEggFryPromise() {
    return new Promise((resolve, reject) => {
        let wifeMood = 2;
        setTimeout(() => {
            if (wifeMood >= 5) {
                resolve("Your egg is ready")
            } else {
                reject("I'm in a bad mood")
            }
        }, 0);
    })
}
async function getResult(){
    try {
        let result= await getToastPromise();
        console.log(result);
        let eggResult= await getEggFryPromise();
        console.log(eggResult);
    } catch (error) {
       console.log(error); 
    }
}
getResult();