// use recursive function to find factorial of 7

function recursion(count){
    console.log("Iteretion start  " + count);       //use to check how many time outer function excute
    if(count === 0)
    { return 1;
        
    }
    else{return count * recursion(--count);}        //again call same function with dicrement which will
     }                                              // repeate the logic till 0 and return 1, it willbe 
console.log(recursion(7));                          //nested returns with calculations from downwards
