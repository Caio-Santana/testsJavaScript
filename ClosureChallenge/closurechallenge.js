function makePassword(password) {
    return function guessPassword(passwordGuess) {
        return (passwordGuess === password);
    };
}
function multN(n) {
    return function multiplyBy(number) {
        return number * n;
    };
}
function makeCounter() {
    var count = 0;
    return {
        increment: function () {
            count = count + 1;
            return count;
        }
    };
}

console.log("usando closure makePassword:");
var tryPassword = makePassword("senha123");
console.log(tryPassword("senha"));
console.log(tryPassword("senha13"));
console.log(tryPassword("Senha123"));
console.log(tryPassword("senha123"));

console.log("usando closure multN:");
var multiply = multN(5);
console.log(multiply(2));
console.log(multiply(3));

console.log("usando closure makeCounter:");
var doCount = makeCounter();
console.log(doCount.increment());
console.log(doCount.increment());
console.log(doCount.increment());
console.log(doCount.increment());

function makeTimer(doneMessage, n) {
    setTimeout(function () {
        alert(doneMessage);
    }, n);
}
makeTimer("Cookies are done!", 1000);
