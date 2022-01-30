
var passengers = [
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "premium" }
];

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

var passengersList = processPassengers(passengers, printPassenger);

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}
function checkNotPaid(passenger) {
    return (!passenger.paid);
}
function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}
function printPassenger(passenger) {
    console.log(passenger.name);
    return false;
}
function serverCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    
    getDrinkOrderFunction();
    // get dinner order
    getDinnerOrderFunction();
    // pick up trash
}
function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            alert("Your choice is cola or water.");
        };
    } else {
        orderFunction = function () {
            alert("Your choice is wine, cola or water.");
        };
    }
    return orderFunction;
}
function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("Would you like snack box or cheese plate?");
        };
    } else {
        orderFunction = function () {
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}
function serverPassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serverCustomer(passengers[i]);
    }
}
serverPassengers(passengers);

