let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg"); 

let turnO = true;//player O , player X
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

};
const enableboxes = () => {
    for(let box of boxes){ 
        box.disabled = false;
        box.innerText = "";
    }
};
let div1 = document.querySelector("game");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){ //Player O
            box.innerText = "O";
            turnO  = false;
            box.style.color = "purple";
        }
        else{//player X
            box.innerText = "X";
            turnO = true;
            box.style.color = "green";
        }
        box.disabled = true;

        checkwinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
     for(let box of boxes){
                box.disabled = true;
    }
};

const checkwinner = () => {
    for(let pattern of winpatterns){

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("Winner",posval1);
                showWinner(posval1);
            }
        }
    }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);


