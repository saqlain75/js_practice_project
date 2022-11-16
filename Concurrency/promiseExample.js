const promise= new Promise((resolve, reject) =>  resolve("Start Counting"))

const counter=(count)=> console.log(count);

promise.then(sucess => {counter(sucess)
return("one")})
.then(value => {counter(value)
return("two")})
.then(value => {counter(value)
    return("three")})
.then(value => counter(value))
