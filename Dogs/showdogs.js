
function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
    console.log("stack.");
};
ShowDog.prototype.bait = function () {
    console.log("bait.");
};
ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
    console.log("groom.");
};


var sDog = new ShowDog("Ulisses", "Big Dog", 50, "Wayne");
sDog.stack();
console.log(sDog.league);
console.log(sDog.species);



