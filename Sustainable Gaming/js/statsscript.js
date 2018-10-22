var tim = document.getElementById("Tim");
var jim = document.getElementById("Jim");

jim.style.display = "none";

function openTim() {
    if (tim.style.display === "none") {
        tim.style.display = "block";
        jim.style.display = "none";
    }
}

function openJim() {
    if (jim.style.display === "none") {
    	tim.style.display = "none";
        jim.style.display = "block";
    }
}


