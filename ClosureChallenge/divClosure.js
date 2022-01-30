
window.onload = function () {
    var count = 0;
    var button = document.getElementById("clickme");
    var message = "You clicked me ";
    var div = document.getElementById("message");
    
    button.onclick = function () {
        count++;
        div.innerHTML = message + count + " times!";
    }
};