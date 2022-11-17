 const breakFast=(item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${item} is ready`)
        }, 3000)  
    }) 
}
async function order(item){
    const order=await  breakFast(item)
    console.log(order);
}
order("Omelatte")
order("Cheese")
order("Paratha")