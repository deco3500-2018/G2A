var img = document.getElementById("image");
var health = document.getElementById("health");
var attack = document.getElementById("attack");
var speed = document.getElementById("speed");
var critical = document.getElementById("critical");
var stamina = document.getElementById("stamina");
var characterName = document.getElementById("character");
var characterDescription = document.getElementById("description");
var characterWindow = document.getElementById("characterWindow");

var myCurrentHealth = document.getElementById("myCurrentHealth");
var myTotalHealth = document.getElementById("myTotalHealth");
var myCurrentStamina = document.getElementById("myCurrentStamina");
var myTotalStamina = document.getElementById("myTotalStamina");

var enemyCurrentHealth = document.getElementById("enemyCurrentHealth");
var enemyTotalHealth = document.getElementById("enemyTotalHealth");
var enemyCurrentStamina = document.getElementById("enemyCurrentStamina");
var enemyTotalStamina = document.getElementById("enemyTotalStamina");


var fightButton1 = document.getElementById("fightButton1");
var fightButton2 = document.getElementById("fightButton2");
var fightButton3 = document.getElementById("fightButton3");

var winState = document.getElementById("winState");

var myCharacter = document.getElementById("myCharacter");
var enemyCharacter = document.getElementById("enemyCharacter");



$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

function brokenVessel()
{
  img.src="images/test2.png";
  health.style.width = "80%";
  attack.style.width = "40%";
  speed.style.width = "30%";
  critical.style.width = "100%";
  stamina.style.width = "75%";
  characterName.innerHTML = "Broken Vessel";
  characterDescription.innerHTML = "Shattered corpse, reanimated by infected parasites.";
  myCharacter.src = "images/test2.png";
  enemyCharacter.src = "images/test1.png";
  return false;
}

function hornet()
{
  img.src="images/test1.png";
  health.style.width = "50%";
  attack.style.width = "80%";
  speed.style.width = "100%";
  critical.style.width = "75%";
  stamina.style.width = "100%";
  characterName.innerHTML = "Hornet";
  characterDescription.innerHTML = "Skilled protector of Hallownest's ruins. Wields a needle and thread.";
  myCharacter.src = "images/test1.png";
  enemyCharacter.src = "images/test2.png";
  return false;
}

function startGame()
{
  characterWindow.style.display = "none";
  gameWindow.style.display = "block"
  return false;
}

function stopGame()
{
  characterWindow.style.display = "block";
  gameWindow.style.display = "none";
  return false;
}

function attackPhaseOne()
{
  enemyCurrentHealth.style.width = "60%";
  myCurrentStamina.style.width = "80%";
  return false;
}

function attackPhaseTwo()
{
  myCurrentHealth.style.width = "75%";
  enemyCurrentStamina.style.width = "80%";
  fightButton1.style.display = "none";
  fightButton2.style.display = "block";
  return false;
}

function attackPhaseThree()
{
  enemyCurrentHealth.style.width = "30%";
  myCurrentStamina.style.width = "60%";
  return false;
}

function attackPhaseFour()
{
  myCurrentHealth.style.width = "50%";
  enemyCurrentStamina.style.width = "60%";
  fightButton2.style.display = "none";
  fightButton3.style.display = "block";
  return false;
}

function attackPhaseFive()
{
  enemyCurrentHealth.style.width = "0%";
  myCurrentStamina.style.width = "40%";
  return false;
}

function attackPhaseSix()
{
  myCurrentHealth.style.width = "50%";
  fightButton3.style.display = "none";
  return false;
}

function victoryState()
{
  winState.style.display = "block";
  return false;
}

function resetGame(){
  fightButton1.style.display = "block";
  fightButton2.style.display = "none";
  fightButton3.style.display = "none";
  myCurrentHealth.style.width = "100%";
  myCurrentStamina.style.width = "100%";
  enemyCurrentHealth.style.width = "100%";
  enemyCurrentStamina.style.width = "100%";
  winState.style.display = "none";

  return false;

}
