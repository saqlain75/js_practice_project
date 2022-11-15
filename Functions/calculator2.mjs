const array= [];
for(let i=0; i<10; i++){
const value1=i*5;
const value2=i*i;
let result= calculator(value1 , value2);
array.push(result);
}
console.log(array);

function calculator(a ,b ){
    return a+b ;
}