function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.sitting = false;
Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function () {
    console.log("Run!");
};
Dog.prototype.wag = function () {
    console.log("Wag!");
};
Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting.");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting.");
    }
};





var myDog = new Dog("Fido", "Labrador", 30);

console.log("My dog name is: " + myDog.name);
console.log("breed of dog: " + myDog.breed);
console.log("weight of dog: " + myDog.weight);
myDog.bark();

var lilChihuahua =
    new Dog("ChiChi", "Chihuahua", 5);
console.log(lilChihuahua.name);
lilChihuahua.bark = function () {  //override
    console.log(this.name + " says WOOF!");
};
lilChihuahua.bark();

console.log(lilChihuahua.name + " has own property 'sitting'? " + lilChihuahua.hasOwnProperty("sitting"));
lilChihuahua.sit();
console.log(lilChihuahua.name + " has own property 'sitting'? " + lilChihuahua.hasOwnProperty("sitting"));
lilChihuahua.sit();
myDog.sit();
myDog.sit();

console.log(lilChihuahua.hasOwnProperty("species"));

