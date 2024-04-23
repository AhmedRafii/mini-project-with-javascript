let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");


/* This is an example of 2D array
let arry = [["Apple", "Mango"], ["Jeans", "T-shirt"], ["Summer", "Winter"], ["Fish", "Meat"]]; */

let turnZero = true; // if result is true then print 0, if it false then print X

let winptrns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame 

    turnZero = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnZero) {
      box.innerHTML = "O";
      turnZero = false;
    } else {
      box.innerHTML = "X";
      turnZero = true;
    }
    checkWinner();
    box.disabled = true;
  });
});


const disableBoxes = () => {
for(let box of boxes) {
box.disabled = true;
}
}

const enableBoxes = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    }
    }

const showWinner = (winner) => {
msg.innerText =  `Congratulation The Winner Is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winptrns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
  
  if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
    if(pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log ("Winner Winner Chicken Dinner", pos1Val)
        showWinner(pos1Val);
    }
  }
 }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);