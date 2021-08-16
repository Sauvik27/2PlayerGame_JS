// // TicTacToe JAVASCRIPT FUNCTIONS
var clickCount = 0;
function getTicValue(number){
  clickCount++;
  var x = number;
  if(clickCount%2 == 0)
  {
    document.getElementsByClassName("cross")[x].className = "far fa-circle cross";
    document.getElementsByClassName("cross")[x].style.color = "#ff7171";
    document.getElementsByClassName("smallBox")[x].disabled = true;
  }
  else{
    document.getElementsByClassName("cross")[x].className = "fas fa-times cross";
    document.getElementsByClassName("cross")[x].style.color = "#4aa96c";
    document.getElementsByClassName("smallBox")[x].disabled = "true";
  }
  ifPlayerWin(clickCount);
}

function ifPlayerWin(x)
{
  var number = x;
  var box0 = document.getElementsByClassName("cross")[0].className;
  var box1 = document.getElementsByClassName("cross")[1].className;
  var box2 = document.getElementsByClassName("cross")[2].className;
  var box3 = document.getElementsByClassName("cross")[3].className;
  var box4 = document.getElementsByClassName("cross")[4].className;
  var box5 = document.getElementsByClassName("cross")[5].className;
  var box6 = document.getElementsByClassName("cross")[6].className;
  var box7 = document.getElementsByClassName("cross")[7].className;
  var box8 = document.getElementsByClassName("cross")[8].className;
  if(((box0 == box1 && box1 == box2) && (box0!="cross")) || ((box3 == box4 && box4 == box5) && (box3!="cross")) || ((box6 == box7 && box7 == box8) && (box6!="cross")))
  {
    whichPlayerWon(number);
    $(':button.smallBox').prop('disabled', true);
  }
  if(((box0 == box3 && box3 == box6) && (box0!="cross")) || ((box1 == box4 && box4 == box7) && (box1!="cross")) || ((box2 == box5 && box5 == box8) && (box2!="cross")))
  {
    whichPlayerWon(number);
    $(':button.smallBox').prop('disabled', true);
  }
  if(((box0 == box4 && box4 == box8) && (box0!="cross")) || ((box2 == box4 && box4 == box6) && (box2!="cross")))
  {
    whichPlayerWon(number);
    $(':button.smallBox').prop('disabled', true);
  }
}

function whichPlayerWon(number){
  if(number%2 == 0)
  {
    document.getElementById("winner1").innerHTML = "Player 2 wins";
  }
  else{
    document.getElementById("winner1").innerHTML = "Player 1 wins";
  }
}



// DICE GAME JAVASCRIPT FUNCTIONS
var dice1 = 1;
var dice2 = 1;
function random(diceNumber) {
  var rand = Math.floor((Math.random() * 6) + 1);
  if(diceNumber == 0){
    dice1 = rand;
  }
  else{
    dice2 = rand;
  }
  switch (rand) {
    case 1:
      return "fas fa-dice-one dice";
      break;
    case 2:
      return "fas fa-dice-two dice";
      break;
    case 3:
      return "fas fa-dice-three dice";
      break;
    case 4:
      return "fas fa-dice-four dice";
      break;
    case 5:
      return "fas fa-dice-five dice";
      break;
    case 6:
      return "fas fa-dice-six dice";
      break;
  }
}


function diceChange(diceNumber) {
  var getClass = random(diceNumber);
  var x = diceNumber;
  document.getElementsByClassName("dice")[x].className = getClass;
}
function winner()
{
  if(dice1>dice2)
  {
    document.getElementById("winner2").innerHTML = "Player 1 wins";
  }
  else if(dice1 === dice2)
  {
    document.getElementById("winner2").innerHTML = "Match tied";
  }
  else{
    document.getElementById("winner2").innerHTML = "Player 2 wins";
  }
}
