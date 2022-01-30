var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = true;
    },
    drive: function(){
        if (this.started) {
            alert("zoom zoom!");
        } else {
            alert("engine not started!");
        }
    }
};

taxi.start();
taxi.drive();

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return true;
    }
}

var worthALook = prequal(taxi);
if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}