window.onload = init;
function init() {
    var map = document.getElementById("map");
    document.onmousemove = showCoords;
    setTimeout(timeHandler, 3000);
}
function showCoords(eventObj) {
    var coords = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    coords.innerHTML = "Map coordinates: " + x + "," + y;
}

function timeHandler() {
    alert("Time handler in action!");
    var objInterval = setInterval(() => { console.log("A second..."); }, 1000);
    setTimeout(() => { clearInterval(objInterval); alert("10 seconds over!"); }, 10000);
}