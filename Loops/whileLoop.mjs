import PromptSync from "prompt-sync";
const prompt=PromptSync();

const randomnumber= Math.floor(Math.random()*10 + 1);

let status=false;
while(!status){
    let userinput=prompt("Guess a number b/t 1-10  ")
    userinput=Number(userinput);
    if(userinput===randomnumber){
        console.log("You Won !!");
        status=true;
    }else if(userinput>randomnumber){
        console.log("Sorry, your guess is too high")
    }else if(userinput<randomnumber){
        console.log("Sorry, your guess is too low")
    }    
}