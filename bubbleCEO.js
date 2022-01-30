var scores =
    [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
        34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
        46, 31, 58, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function printSolutions(solutions) {
    var output;
    for (let i = 0; i < solutions.length; i++) {
        output = "Bubble solution #" + i + " score: " + solutions[i];
        console.log(output);
    }
}

function getHighScore(solutions) {
    var highScore = 0;
    for (let i = 0; i < solutions.length; i++) {
        if (solutions[i] > highScore) {
            highScore = solutions[i];
        }
    }
    return highScore;
}

function getBestResults(solutions, highest) {
    var bestSolutions = [];
    for (let i = 0; i < solutions.length; i++) {
        if (highest == solutions[i]) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

function getMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100;
    var index;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}

printSolutions(scores);
var highestScore = getHighScore(scores);
var bestResults = getBestResults(scores, highestScore);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highestScore);
console.log("Solutions with highest score: " + bestResults);
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highestScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective.");
