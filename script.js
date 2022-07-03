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
const helper = () => {
  const myMoveWin = document.querySelector(".me");
  let houseChoose = houseChoosen();
  houseMove = assignMove(houseChoose, housePicked, "house");
  houseDecision.innerHTML = houseMove;
  const houseMoveWin = document.querySelector(".house");

  if (meChoose == houseChoose) {
    helper();
  } else if (
    (meChoose === 3 && houseChoose === 1) ||
    (meChoose === 2 && houseChoose === 3) ||
    (meChoose === 1 && houseChoose === 2)
  ) {
    output("YOU LOSE");
    houseMoveWin.classList.add("winner");
  } else {
    output("YOU WIN");
    myMoveWin.classList.add("winner");
  }
  result.classList.remove("remove");
  if (whoWins) {
    result.innerHTML = whoWins;
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", () => {
      meChoose = 0;
      houseChoose = 0;
      decision.classList.add("noplay");
      result.innerHTML = "";
      result.classList.add("remove");
      mainGame.classList.add("active");
    });
  }
};

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

function assignMove(key, whoPicked, who) {
  let move;
  switch (key) {
    case 1:
      move = `<h2>${whoPicked}</h2><div class="move rock choosen ${who}">
      <img src="./images/icon-rock.svg" alt="rock" />
    </div>`;
      break;
    case 2:
      move = `<h2>${whoPicked}</h2><div class="move paper choosen ${who}">
      <img src="./images/icon-paper.svg" alt="paper" />
    </div>`;
      break;
    case 3:
      move = `<h2>${whoPicked}</h2><div class="move scissors choosen ${who}">
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

const myMovePass = () => {
  myMove = assignMove(meChoose, mePicked, "me");
  decision.classList.remove("noplay");
  myDecision.innerHTML = myMove;
  clear();
  houseDecision.innerHTML = `<h2>${housePicked}</h2>
  <div class="pending"></div>`;

  setTimeout(helper, 1000);
};

scissorsChoosen.addEventListener("click", () => {
  meChoose = 3;
  myMovePass();
});
paperChoosen.addEventListener("click", () => {
  meChoose = 2;
  myMovePass();
});
rockChoosen.addEventListener("click", () => {
  meChoose = 1;
  myMovePass();
});
