let count = 0 ;
function Counter(value){
    return new Promise(resolve => {
       setTimeout(() => {
        count++ 
        resolve(`x value ${value} Counter: ${count}`)
       }, 1000); 
    })
}
async function asyncFunction(value){
    console.log(`ready ${value} Counter: ${count}`)
   const resolveValue = await Counter(value)
   console.log(resolveValue);
}
for (let i = 1; i < 4; i++) {
    asyncFunction(i);
    }
