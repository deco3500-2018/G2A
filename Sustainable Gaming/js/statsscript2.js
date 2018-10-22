var leadboard = document.getElementById("leaderBoard");
var equiplist = document.getElementById("equipment");
var tasklist = document.getElementById("tasklist");
var gameTime = document.getElementById("gameTime");

equiplist.style.display = "none";
gameTime.style.display = "none";
tasklist.style.display = "none";

function closeAll() {
	leadboard.style.display = "none";
	equiplist.style.display = "none";
	gameTime.style.display = "none";
	tasklist.style.display = "none";
}

function openLeaderBoard() {
    if (leadboard.style.display === "none") {
    	closeAll();
    	leadboard.style.display = "block";
    }
}

function openEquipment() {
    if (equiplist.style.display === "none") {
    	closeAll();
    	equiplist.style.display = "block";
    }
}

function openGameTime() {
	if (gameTime.style.display === "none") {
		closeAll();
		gameTime.style.display = "block";
	}
}

function openTaskList() {
    if (tasklist.style.display === "none") {
    	closeAll();
    	tasklist.style.display = "block";
    }
}