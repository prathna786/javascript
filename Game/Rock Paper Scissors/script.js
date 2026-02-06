let userscore = 0;
let computerscore = 0;

const choice = document.querySelectorAll(".ch");
const msg = document.querySelector("#msg");

const userScore_span = document.querySelector("#user");
const computerScore_span = document.querySelector("#computer");

const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawgame = () => {
    msg.innerText = "Game Draw. Play Again!!";
    msg.style.color = "white";
    msg.style.backgroundColor = "#9a7070";
};

const showwinner = (userwin,userchoice,computerchoice) => {
    if(userwin){
        userscore++;
        userScore_span.innerText = userscore;

        msg.innerText = `You Win!! Your ${userchoice} beats ${computerchoice}`;
        msg.style.color = "white";
        msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        computerScore_span.innerText = computerscore;
        msg.innerText = `You Lost. ${computerchoice} beats ${userchoice}`;
        msg.style.color = "white";
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    //generate computer choice
    const computerchoice = gencomputerchoice();
    if(userchoice === computerchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userwin = computerchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //rock, scissors
            userwin = computerchoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }
};
//Add evenet listener to each choice
choice.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userchoice = ch.getAttribute("id");
        playgame(userchoice);
    });
});
