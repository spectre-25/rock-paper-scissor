let choices=document.querySelectorAll(".choice");
let yourScr=document.querySelector("#player");
let compScr=document.querySelector("#comp");
let result=document.querySelector("#result")
let uwin=0;
let cwin=0;
const compChoices=["rock","paper","scissor"]
let userWin=true;
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userchoice=choice.getAttribute("id");
        console.log(userchoice)
        playGame(userchoice);
    })
    
})
const playGame=(userchoice) => {
    let idx=Math.floor(Math.random()*3)
    console.log(compChoices[idx]);
    let compChoice=compChoices[idx];
    checkwinner(userchoice,compChoice);
}
const checkwinner=(userchoice,compChoice)=>{
    if(userchoice===compChoice){
        Draw();
    }
    else{
    if(userchoice==="rock"){
    if(compChoice==="scissor"){
        userWin=true;
    }
    else{
        userWin=false;
    }
   }
   else if(userchoice==="paper"){
    if(compChoice==="rock"){
        userWin=true;
    }
    else{
        userWin=false;
    }
   }
   else if(userchoice==="scissor"){
    if(compChoice==="paper"){
        userWin=true;
    }
    else{
        userWin=false;
    }
   }
   printWinner(userWin,userchoice,compChoice);
}
}
const Draw=()=>{
    result.innerText="Game Draw"
    result.style.backgroundColor="yellow"
}
const printWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        console.log("You win");
        result.innerText=`You win,${userchoice} beats ${compChoice}`;
        yourScr.innerText=++uwin;
        result.style.backgroundColor="green"
    }
    else{
        console.log("Comp wins")
        result.innerText=`Comp wins ${userchoice} was beaten by ${compChoice}`;
        compScr.innerText=++cwin;
        result.style.backgroundColor="red"
    }
}
