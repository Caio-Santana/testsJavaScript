function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
};
Robot.prototype.idNumber;
Robot.prototype.speak = function () {
    console.log(this.name + " speaking...");
};
Robot.prototype.walk = function () {
    console.log(this.name + " walking...");
};
Robot.prototype.toString = function () {
    return this.name + " Robot belonging to " + this.owner;
};

function SpaceRobot(name, year, owner, homePlanet) {
    Robot.call(this, name, year, owner);
    this.homePlanet = homePlanet;
};

SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.constructor = SpaceRobot;

SpaceRobot.prototype.power = "Eletric";

SpaceRobot.prototype.shootLaser = function () {
    console.log(this.name + " shooting lasers!");
};

var simpleRobot = new Robot("Old Robot", 1950, "Bob");
var c3po = new SpaceRobot("c3po", 3512, "Luke Skywalker", "Death Star");

simpleRobot.idNumber = Math.floor((Math.random() * 100) + 1);
c3po.idNumber = Math.floor((Math.random() * 100) + 1);

console.log(simpleRobot.name + " idNumber: " + simpleRobot.idNumber);
simpleRobot.speak();
simpleRobot.walk();

console.log(c3po.name + " idNumber: " + c3po.idNumber);
console.log(c3po.homePlanet);
c3po.power = "Light";
console.log(c3po.name + " power: " + c3po.power);
c3po.shootLaser();
c3po.walk();
c3po.speak();

console.log(c3po.name + " is a instance of SpaceRobot? " + (c3po instanceof SpaceRobot));
console.log(c3po.name + " constructor is " + c3po.constructor);
console.log(c3po.toString());


