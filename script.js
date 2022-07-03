const ruleToggle = document.querySelector(".rules");
const ruleBg = document.querySelector(".rule_bg");
const ruleClose = document.getElementById("rule_close");
const ruleDisplay = document.querySelector(".rule_box");
const rockChoosen = document.querySelector(".rock");
const paperChoosen = document.querySelector(".paper");
const scissorsChoosen = document.querySelector(".scissors");
const mainGame = document.querySelector(".main_game");
const myDecision = document.querySelector(".my_side");
const houseDecision = document.querySelector(".house_side");
const result = document.querySelector(".result");
const decision = document.querySelector(".decision");

const mePicked = "YOU PICKED";
const housePicked = "THE HOUSE PICKED";
let meChoose;
let houseChoose;
let myMove;
let houseMove;
let whoWins;

const ruleRemove = () => {
  ruleToggle.classList.remove("active");
};

const ruleAdd = () => {
  ruleToggle.classList.add("active");
};

ruleBg.addEventListener("click", ruleRemove);
ruleClose.addEventListener("click", ruleRemove);
ruleDisplay.addEventListener("click", ruleAdd);

// Game Logic

// Util functions
function output(winner) {
  switch (winner) {
    case "YOU WIN":
      whoWins = `<h2>${winner}</h2>
      <button class="btn" type="button">PLAY AGAIN</button>`;
      break;
    case "YOU LOSE":
      whoWins = `<h2>${winner}</h2>
      <button class="btn" type="button">PLAY AGAIN</button>`;
      break;
    case "DRAW":
      whoWins = `<h2>${winner}</h2>
      <button class="btn" type="button">PLAY AGAIN</button>`;
      break;

    default:
      break;
  }
}

function assignMove(key, whoPicked) {
  let move;
  switch (key) {
    case 1:
      move = `<h2>${whoPicked}</h2><div class="move rock choosen">
      <img src="./images/icon-rock.svg" alt="rock" />
    </div>`;
      break;
    case 2:
      move = `<h2>${whoPicked}</h2><div class="move paper choosen">
      <img src="./images/icon-paper.svg" alt="paper" />
    </div>`;
      break;
    case 3:
      move = `<h2>${whoPicked}</h2><div class="move scissors choosen">
      <img src="./images/icon-scissors.svg" alt="scissors" />
    </div>`;
      break;

    default:
      break;
  }
  return move;
}

const clear = () => {
  mainGame.classList.remove("active");
};

// House decisions

function houseChoosen() {
  let houseChoose = Math.random() * 3;
  return Math.ceil(houseChoose);
}

// My Moves

const myMovePass = (choose) => {
  myMove = assignMove(choose, mePicked);
  decision.classList.remove("noplay");
  myDecision.innerHTML = myMove;
  clear();
  houseDecision.innerHTML = `<h2>${housePicked}</h2>
  <div class="pending"></div>`;

  setTimeout(() => {
    let num = houseChoosen();
    houseMove = assignMove(num, housePicked);
    houseDecision.innerHTML = houseMove;
    if (choose == num) {
      output("DRAW");
    } else if ((choose == 3 && num === 1) || choose > num) {
      output("YOU WIN");
    } else {
      output("YOU LOSE");
    }
    result.classList.remove("remove");
    if (whoWins) {
      result.innerHTML = whoWins;
      const btn = document.querySelector(".btn");

      btn.addEventListener("click", () => {
        console.log("BTN clicked");
        meChoose = 0;
        houseChoose = 0;
        decision.classList.add("noplay");
        result.innerHTML = "";

        mainGame.classList.add("active");
      });
    }

    console.log(choose + " " + num);
  }, 1000);
};

scissorsChoosen.addEventListener("click", () => {
  meChoose = 3;
  myMovePass(meChoose);
});
paperChoosen.addEventListener("click", () => {
  meChoose = 2;
  myMovePass(meChoose);
});
rockChoosen.addEventListener("click", () => {
  meChoose = 1;
  myMovePass(meChoose);
});

// Play Again
