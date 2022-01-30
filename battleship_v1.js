var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hit = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Invalid input!");
    } else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            hit++;
            alert("HIT!");
            if (hit == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}
var percent = (3 / guesses) * 100;
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + percent + "%.";
alert(stats);
