var img = document.getElementById("image");
var health = document.getElementById("health");
var attack = document.getElementById("attack");
var speed = document.getElementById("speed");
var critical = document.getElementById("critical");
var stamina = document.getElementById("stamina");
var characterName = document.getElementById("character");
var characterDescription = document.getElementById("description");
var characterWindow = document.getElementById("characterWindow")


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
  gameWindow.style.display = "none"
  return false;
}
