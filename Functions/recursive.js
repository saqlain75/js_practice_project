function number(nr){
    console.log("Itteration Starts  "+ nr)      //  outer function execute first then
    if(nr>0){                                   //  inner function execute fand return numbers end to top.
        number(--nr)
    }
    else{console.log("Iteration Ends")}
    console.log(nr)
}
number(5)