function greet(name){
console.log(`Hello ${name[0]+` ` +name[1]}`)
}

function mainFunction(fullname,callback){
const name =  fullname.split(" ");
console.log(name)
callback(name);
}

mainFunction("Muhammad Saqlain",greet);