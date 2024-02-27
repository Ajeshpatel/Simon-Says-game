let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 400);
}

function userflash(btn){
    btn.classList.add("user-flash");
    setTimeout(function (){
        btn.classList.remove("user-flash");
    }, 400);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    /* console.log(randIdx);
    console.log(randcolor);
    console.log(randbtn); */
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameflash(randbtn);
}

function checkAns (idx){
    //console.log("curr level:", level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! your score was <b>${level} </b> <br> Press any key to start `;
        //yha hm h2.innerHTML kiye kyuki innerText ke andar tags nhi likh sakte.

        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"; 
        }, 150);     
        reset();
    } 
}

function btnpress (){
    console.log(this)
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
