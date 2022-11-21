// Promise
function getToastPromise() {
    return new Promise((resolve, reject) => {
        let wifeMood = 9;
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
getToastPromise().then((arg) => {
    console.log(arg);
    return getEggFryPromise();
})
    .then((arg) => {
        console.log(arg);
    })
    .catch((error) => {
        console.log(error);
    })