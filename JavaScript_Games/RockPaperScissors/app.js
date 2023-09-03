
let userchoice = document.getElementById('user-choice');


let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let btnrock = document.getElementById("rock");
let btnpaper = document.getElementById("paper");
let btnscissors = document.getElementById("scissors");

function userRock(){
    btnscissors.style.fontSize = "13px";
    userchoice.innerHTML="Rock";
    console.log("clicked1")
    userchoice.style.color = "blue";
    userchoice.style.fontStyle = "italic";

    btnrock.style.fontSize = "12px";
    btnpaper.style.fontSize = "13px";
    
}
function userPaper(){
    btnrock.style.fontSize = "13px";
    userchoice.innerHTML="Paper";
    console.log("clicked2")
    userchoice.style.color = "blue";
    userchoice.style.fontStyle = "italic";
    btnpaper.style.fontSize = "12px";
    btnscissors.style.fontSize = "13px";
}
function userScissors(){
    btnpaper.style.fontSize = "13px";
    userchoice.innerHTML="Scissors";
    console.log("clicked3")
    userchoice.style.color = "blue";
    userchoice.style.fontStyle = "italic";
    btnscissors.style.fontSize = "12px";
    btnrock.style.fontSize = "13px";
}


