let colors = ["white","green","red","yellow","blue","rgba(0,0,0)","#f15025"];

let btn = document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomnum = getrandom();
    document.body.style.backgroundColor = colors[randomnum];
    color.textContent = colors[randomnum];
});

function getrandom(){
    return Math.floor(Math.random()*colors.length);
}

let simple = document.getElementById('dd');
let container=document.getElementById('dcont');


// hex one:-

let hexcolors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btn2 = document.getElementById("hexbtn");
let color2 = document.querySelector(".color");


btn2.addEventListener("click", function(){
    let hexnum="#";
    for(let i=0;i<6;i++){
        hexnum=hexnum+hexcolors[getrandom2()];   
    }
    color2.textContent=hexnum;
    document.body.style.backgroundColor = hexnum;
})

function getrandom2(){
    return Math.floor(Math.random() * hexcolors.length);
}