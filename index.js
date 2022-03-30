const reloadHeader = (winningPlayer) => {
  const header = document.querySelector("h1");
  switch (winningPlayer) {
    case 1:
      header.innerText = "🚩 Player 1 Wins!";
      break;
    case 2:
      header.innerText = "Player 2 Wins! 🚩 ";
      break;
    default:
      header.innerText = "Draw 🤪";
  }
};

const rollDice = () => {
  console.log("rollDice() run");
  const player1 = Math.floor(Math.random() * 6) + 1;
  const player2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", diceLoader(player1));
  document.querySelector(".img2").setAttribute("src", diceLoader(player2));

  if (player1 > player2) {
    reloadHeader(1);
  } else if (player2 > player1) {
    reloadHeader(2);
  } else {
    reloadHeader(4);
  }
};

const diceLoader = (number) => {
  let diceNumber;
  switch (number) {
    case 1:
      diceNumber = "images/dice1.png";
      break;
    case 2:
      diceNumber = "images/dice2.png";
      break;
    case 3:
      diceNumber = "images/dice3.png";
      break;
    case 4:
      diceNumber = "images/dice4.png";
      break;
    case 5:
      diceNumber = "images/dice5.png";
      break;
    case 6:
      diceNumber = "images/dice6.png";
      break;
  }

  return diceNumber;
};

const rollButton = document.querySelector("button");
rollButton.addEventListener("click", (e) => rollDice());

// COURSE SOLUTION
// const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// const randomDiceImage = "dice" + randomNumber1 + ".png";

// const randomImageSource = "images/" + randomDiceImage;

// const image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// if(randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
// }else if(randomNumber2 > randomNumber1){
//   document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
// }
// else{
//   document.querySelector("h1").innerText = "Draw 🤪";
// }
