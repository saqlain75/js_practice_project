// Even/odd with promise

function job(data){
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
        reject('error');
        } else if(data%2 === 0) {
        setTimeout(reject, 2000,'even');
        } else {
        setTimeout(resolve, 1000, 'odd');
        }       
})
}
job(27).then(function success(data) {
console.log(data);
}, function error(data) {
console.error(data);
});