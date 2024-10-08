let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
//playerX, playerO
let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame = () =>{
    turnO = true;
    count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log(count);
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const disabledBoxes = ()=>{
    for(let box of boxes)
        box.disabled=true;
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations!! Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
}

const draw = () =>{
    msg.innerText = `It's a Draw !!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    let isDraw=true;
    for(let pattern of winPatterns)
        {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val!="" && pos2Val!="" && pos3Val!="")
                {
                    if(pos1Val===pos2Val && pos2Val===pos3Val)
                        {
                            isDraw=false;
                            disabledBoxes();
                            showWinner(pos1Val);
                        }
                }
        }
    if(isDraw && count===9) 
        {
            count=0;
            disabledBoxes();
            draw();
        }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);