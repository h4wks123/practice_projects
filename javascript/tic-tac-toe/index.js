let tictactoe = [
  ["<button onClick='changeValue(0)'></button>", 0, "unset"],
  ["<button onClick='changeValue(1)'></button>", 0, "unset"],
  ["<button onClick='changeValue(2)'></button>", 0, "unset"],
  ["<button onClick='changeValue(3)'></button>", 0, "unset"],
  ["<button onClick='changeValue(4)'></button>", 0, "unset"],
  ["<button onClick='changeValue(5)'></button>", 0, "unset"],
  ["<button onClick='changeValue(6)'></button>", 0, "unset"],
  ["<button onClick='changeValue(7)'></button>", 0, "unset"],
  ["<button onClick='changeValue(8)'></button>", 0, "unset"],
];
let turn = true;
let Xpoints = 0;
let Ypoints = 0;

display = () => {
  let firstRow = tictactoe
    .slice(0, 3)
    .map((tictactoe) => tictactoe.slice(0, 1))
    .join("");
  let secondRow = tictactoe
    .slice(3, 6)
    .map((tictactoe) => tictactoe.slice(0, 1))
    .join("");
  let thirdRow = tictactoe
    .slice(6, 9)
    .map((tictactoe) => tictactoe.slice(0, 1))
    .join("");

  document.getElementById("tic-tac-toe-first-cells").innerHTML = firstRow;
  document.getElementById("tic-tac-toe-second-cells").innerHTML = secondRow;
  document.getElementById("tic-tac-toe-third-cells").innerHTML = thirdRow;
};

changeValue = (index) => {
  tempChecker(tictactoe);
  if (tictactoe[index][2] !== "set") {
    if (turn === true) {
      tictactoe[index][0] =
        "<button onClick='changeValue(" + index + ")'>" + "X" + "</button>";
      tictactoe[index][1] = 1;
    } else {
      tictactoe[index][0] =
        "<button onClick='changeValue(" + index + ")'>" + "O" + "</button>";
      tictactoe[index][1] = 2;
    }
    tictactoe[index][2] = "temp";
    display();
  }
};

rematch = () => {
  document.getElementById("tic-tac-toe__submit-button").disabled = false;
  tictactoe = [
    ["<button onClick='changeValue(0)'></button>", 0, "unset"],
    ["<button onClick='changeValue(1)'></button>", 0, "unset"],
    ["<button onClick='changeValue(2)'></button>", 0, "unset"],
    ["<button onClick='changeValue(3)'></button>", 0, "unset"],
    ["<button onClick='changeValue(4)'></button>", 0, "unset"],
    ["<button onClick='changeValue(5)'></button>", 0, "unset"],
    ["<button onClick='changeValue(6)'></button>", 0, "unset"],
    ["<button onClick='changeValue(7)'></button>", 0, "unset"],
    ["<button onClick='changeValue(8)'></button>", 0, "unset"],
  ];
  document.getElementById("tic-tac-toe-result").innerHTML = "";
  display();
};

reset = () => {
  Xpoints = 0;
  Ypoints = 0;
  document.getElementById("tic-tac-toe__blue-points").innerHTML =
    "X points: " + Xpoints;
  document.getElementById("tic-tac-toe__red-points").innerHTML =
    "O points: " + Ypoints;
  rematch();
};

tempChecker = (tictactoe) => {
  for (index = 0; index < tictactoe.length; index += 1) {
    if (tictactoe[index][2] === "temp") {
      tictactoe[index][0] =
        "<button onClick='changeValue(" + index + ")'></button>";
      tictactoe[index][1] = 0;
      tictactoe[index][2] = "unset";
    }
  }
};

submitResult = () => {
  for (index = 0; index < tictactoe.length; index += 1) {
    if (tictactoe[index][2] === "temp") {
      tictactoe[index][2] = "set";
      turn = !turn;
      display();
      tictactoeChecker(tictactoe);
    }
  }
};

tictactoeChecker = (tictactoe) => {
  if (
    (tictactoe[0][1] === 1 && tictactoe[1][1] === 1 && tictactoe[2][1] === 1) ||
    (tictactoe[3][1] === 1 && tictactoe[4][1] === 1 && tictactoe[5][1] === 1) ||
    (tictactoe[6][1] === 1 && tictactoe[7][1] === 1 && tictactoe[8][1] === 1) ||
    (tictactoe[0][1] === 1 && tictactoe[3][1] === 1 && tictactoe[6][1] === 1) ||
    (tictactoe[1][1] === 1 && tictactoe[4][1] === 1 && tictactoe[7][1] === 1) ||
    (tictactoe[2][1] === 1 && tictactoe[5][1] === 1 && tictactoe[8][1] === 1) ||
    (tictactoe[0][1] === 1 && tictactoe[4][1] === 1 && tictactoe[8][1] === 1) ||
    (tictactoe[2][1] === 1 && tictactoe[4][1] === 1 && tictactoe[6][1] === 1)
  ) {
    Xpoints += 1;
    document.getElementById("tic-tac-toe__blue-points").innerHTML =
      "X points: " + Xpoints;
    document.getElementById("tic-tac-toe__submit-button").disabled = true;
    document.getElementById("tic-tac-toe-result").innerHTML =
      "X is the winner!";
  } else if (
    (tictactoe[0][1] === 2 && tictactoe[1][1] === 2 && tictactoe[2][1] === 2) ||
    (tictactoe[3][1] === 2 && tictactoe[4][1] === 2 && tictactoe[5][1] === 2) ||
    (tictactoe[6][1] === 2 && tictactoe[7][1] === 2 && tictactoe[8][1] === 2) ||
    (tictactoe[0][1] === 2 && tictactoe[3][1] === 2 && tictactoe[6][1] === 2) ||
    (tictactoe[1][1] === 2 && tictactoe[4][1] === 2 && tictactoe[7][1] === 2) ||
    (tictactoe[2][1] === 2 && tictactoe[5][1] === 2 && tictactoe[8][1] === 2) ||
    (tictactoe[0][1] === 2 && tictactoe[4][1] === 2 && tictactoe[8][1] === 2) ||
    (tictactoe[2][1] === 2 && tictactoe[4][1] === 2 && tictactoe[6][1] === 2)
  ) {
    Ypoints += 1;
    document.getElementById("tic-tac-toe__red-points").innerHTML =
      "O points: " + Ypoints;
    document.getElementById("tic-tac-toe__submit-button").disabled = true;
    document.getElementById("tic-tac-toe-result").innerHTML =
      "O is the winner!";
  } else if (
    tictactoe[0][1] !== 0 &&
    tictactoe[1][1] !== 0 &&
    tictactoe[2][1] !== 0 &&
    tictactoe[3][1] !== 0 &&
    tictactoe[4][1] !== 0 &&
    tictactoe[5][1] !== 0 &&
    tictactoe[6][1] !== 0 &&
    tictactoe[7][1] !== 0 &&
    tictactoe[8][1] !== 0
  ) {
    document.getElementById("tic-tac-toe-result").innerHTML = "Its a tie!";
  }
};

display();
