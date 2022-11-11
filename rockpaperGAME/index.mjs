import randomInteger from "random-int";
import PromptSync from "prompt-sync";

const prompt=PromptSync();
let outcome="Ready To Play";
const choices=["rock","paper","scissors"];
const userprompt="Please Enter= 0 for rock, 1 for paper, 2 for scissors";

const computerchoice=randomInteger(0,2);
const computerchoose=choices[computerchoice];
const userinput=prompt(userprompt);
const userchoose = choices[userinput];

if(computerchoose===userchoose){
    outcome="DRAW"
} else if(computerchoose==="rock" && userchoose==="paper"){
    outcome="Player Wins"
}else if(computerchoose==="rock" && userchoose==="scissors"){
    outcome="Computer Wins"
}else if(computerchoose==="paper" && userchoose==="rock"){
    outcome="Computer Wins"
}else if(computerchoose==="paper" && userchoose==="scissors"){
    outcome="Player Wins"
}else if(computerchoose==="scissors" && userchoose==="paper"){
    outcome="Computer Wins"
}else if(computerchoose==="scissors" && userchoose==="rock"){
    outcome="Player Wins"
}else{ outcome="Invalid Entry, Please Try Again"}

console.log("Computer chooses "+computerchoose)
console.log("Player chooses "+userchoose)
console.log(outcome)
